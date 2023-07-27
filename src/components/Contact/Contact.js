import './Contact.css';
import React, {useRef,useEffect} from "react";
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  Heading
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../../hooks/useSubmit.js";
import {useAlertContext} from "../../context/alertContext.js";




const Contact = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const form = useRef();

  useEffect(() => {
    if (response !== null) {
      onOpen(response.type, response.message)
      if (response.type == 'success') {
        formik.resetForm();
       }    
  }
}, [response]);

  const formik = useFormik({
    initialValues: {
      user_name: "",
      user_email: "",
      empresa:"",
      pais:"",
      telefono:"",
      message: "",
    },
    onSubmit: (values) => {
      submit("../hooks/useSubmit", values);
    },
    validationSchema: Yup.object({
      user_name: Yup.string().required("El campo es obligatorio"),
      pais: Yup.string().required("El campo es obligatorio"),
      telefono: Yup.number().min(10, "Debe digitar un telefono valido de 11 digitos").max(12, "Debe digitar un telefono valido de 11 digitos").required("El campo es obligatorio"),
      message: Yup.string().min(25, "Minimo de caracteres 25").required("El campo es obligatorio"),
    }),
  });

  const sendEmail = (e) => {
    e.preventDefault();
    if(formik.values.user_name?.length < 1|| formik.values.user_email?.length < 1 || formik.values.empresa?.length < 1 || formik.values.pais?.length < 1 || formik.values.telefono?.length < 1 || formik.values.message?.length < 1){
      return <p>Faltan campos por llenar</p>;
    
    }
      alert(`Se ha enviado el mensaje con exito, gracias ${formik.values.user_name}`)
      formik.resetForm();
  };


  return (
    <main  id='contacto' className="container-main-contact-desktop">
        
          <h1 className='heading-center'>
            Contacto!
          </h1>
        <form ref={form} onSubmit={sendEmail}>
            <main className='container-form'>
                <section className='content-first-part'>
                    <FormControl className='form-name-contact'  isInvalid={formik.errors.user_name && formik.touched.user_name}>
                        <Input
                        id="user_name"
                        name="user_name"
                        placeholder="Nombre y Apellidos"
                        type="text"
                        {...formik.getFieldProps("user_name")}
                        />
                        {FormControl.isInvalid !== false && <FormErrorMessage >{formik.errors.user_name}</FormErrorMessage>}
                    </FormControl>
                    <FormControl className='form-pais-contact' isInvalid={formik.errors.empresa && formik.touched.empresa}>
                        <Input 
                        id="pais"
                        name="pais"
                        placeholder="Región/Municipio"
                        type="text"
                        {...formik.getFieldProps("pais")}
                        />
                        {FormControl.isInvalid !== false && <FormErrorMessage>{formik.errors.pais}</FormErrorMessage>}
                    </FormControl>
                </section>
                <section className='content-second-part'>
                    <FormControl className='form-telefono-contact' isInvalid={formik.errors.empresa && formik.touched.empresa}>
                        <Input 
                        id="telefono"
                        name="telegono"
                        placeholder="Teléfono"
                        type="number"
                        {...formik.getFieldProps("telefono")}
                        />
                        {FormControl.isInvalid !== false && <FormErrorMessage>{formik.errors.telefono}</FormErrorMessage>}
                    </FormControl>
                    
                    <FormControl className='form-textarea-contact' isInvalid={formik.errors.message && formik.touched.message}>
                        <FormLabel  htmlFor="message">Mensaje:</FormLabel>
                        <Textarea
                        id="message"
                        name="message"
                        height={100}
                        type="text"
                        {...formik.getFieldProps("message")}
                        />
                        {FormControl.isInvalid !== false && <FormErrorMessage>{formik.errors.message}</FormErrorMessage>}
                    </FormControl>
                      <Button color='white' background='transparent' borderRadius='50%' height='100px' width='100px' className='form-button-contact' type="submit"  isLoading={isLoading}>
                          Enviar
                      </Button>
                </section>
            </main>
          </form>
    </main>
  );
  };
export default Contact;