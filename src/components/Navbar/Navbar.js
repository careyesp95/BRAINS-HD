import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import './Navbar.css';

function Navbar (){
  const outerBox = useRef();
  useEffect(() => {
    let prevScroll = window.pageYOffset;
    console.log(prevScroll + "move");
    const handleScroll = () => {
      let currScroll = window.pageYOffset;
      console.log(currScroll + "c");
      if (prevScroll > currScroll) {
        outerBox.current.style.transform = "translateY(0)";
        prevScroll = currScroll;
      } else if (prevScroll < currScroll) {
        outerBox.current.style.transform = "translateY(-200px)";
        prevScroll = currScroll;
      }
      if(currScroll > 0){
        let elem = document.getElementById('container-navbar');
        elem.style.backgroundColor = 'black';
      }if(currScroll < 1){
        let elem = document.getElementById('container-navbar');
        elem.style.backgroundColor = 'transparent';
      }
    }
    window.addEventListener('scroll', handleScroll);
    return(() => {
    window.removeEventListener('scroll', handleScroll);
    }
    )
  }, []);

  function onMenuDropdown(){
    const dropdownMenu = document.querySelector('.dropdown-menu')
    dropdownMenu.classList.toggle('open')
  }

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      ref={outerBox}
      
    >
      <>
      
        <nav className='container-nav'>
          <h1 className='name-company'>BRAINS</h1>
          <div className='toggle-icon'>
                <button
                  className='button-navbar'
                  onClick={onMenuDropdown}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </button>
            </div>
            <menu className='dropdown-menu'>
                <li><a  className='item-en'href='/#en'>CO</a></li>
                <li><a  className='text-hover' href='/#home' >Home </a></li>
                <li><a  className='text-hover' href='/#brains'>Somos BRAINS</a></li>
                <li><a  className='text-hover' href='/#exito' >Casos de éxito</a></li>
                <li><a  className='text-hover' href='/#mercado'>Mercado</a></li>
                <li><a  className='text-hover' href='/#contacto'>Contacto</a></li>
            </menu>
        </nav>
        <nav id='container-navbar' className="container-mobile  navbar navbar-expand-lg  navbar-dark  p-0 p-md-3">
        <div className="container-fluid">
        <h1 className='name-company'>BRAINS</h1>
          <div className=" navbar-desktop collapse navbar-collapse" >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link text-white text-hover"  href='/#home'>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-hover" href='/#brains'>Somos BRAINS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-hover" href='/#exito'>Casos de éxito</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-hover" href='/#mercado'>Mercado</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-hover" href='/#contacto'>Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-talento text-hover"  href='/#talento' >Talento</a>
              </li>
            </ul>
          </div>
         </div>
        </nav>
      </>
    </Box>
  )
}

export default Navbar;

