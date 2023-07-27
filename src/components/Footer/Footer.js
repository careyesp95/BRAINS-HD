import { FaTwitter, FaLinkedinIn,FaInstagram, FaYoutubeSquare } from 'react-icons/fa';
import './Footer.css';

function Footer(){
    

    return (
        <footer >
            <section className='section-bottom-part'>
                <div className='section-bottom-copyright'>
                    <p> Copyright © 2020 Todos los derechos reservados </p>
                </div>
                <div className='section-bottom-politics'>
                    <p>  Politica de privacidad | Politica de calidad y medio ambiente </p>
                </div>
                <div className='section-bottom-socila-media'>
                    <div className='brand'>
                        <FaTwitter size="20px" opacity="0.5" color="white" />
                    </div>
                    <div className='brand'>
                        <FaLinkedinIn size="20px" opacity="0.5" color="white" />
                    </div>
                    <div className='brand'>
                        <FaInstagram size="20px" opacity="0.5" color="white" />
                    </div>
                    <div className='brand'>
                        <FaYoutubeSquare size="20px" opacity="0.5" color="white" />
                    </div>
                </div>
            </section>
        </footer>
    )

}

export default Footer;