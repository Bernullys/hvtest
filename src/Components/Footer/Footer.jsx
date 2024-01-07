import { NavLink } from "react-router-dom";
import { BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs";
import "./Footer.css";


const Footer = () => {

    return (
        <footer>
            <section className="footer__full__container">
                <section className="footer__nav--container">
                    <section className="footer__central__logo__container">
                        <NavLink className="a-logo-spa" to="/">
                            <img className="logo__hvt--main--footer" src="../../../src/assets/LogoHVTest&diagnosticsSpa.png" alt="HVTest-company-logo" />
                        </NavLink>
                    </section>
                    <section className="footer__central__container">
                        <ul className="footer__nav__ul--social">
                            <a className="footer__solcial__logo" href="https://www.instagram.com/hvtest.cl/" target="_blank" rel="noopener noreferrer">
                                <BsInstagram className="footer__insta-logo"/>
                            </a>
                            <a className="footer__solcial__logo" href="https://www.linkedin.com/company/hv-test" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin className="footer__linke-logo"/>
                            </a>
                            <a className="footer__solcial__logo" href="" target="_blank" rel="noopener noreferrer">
                                <BsWhatsapp className="footer__whatsapp-logo"/>
                            </a>
                        </ul>

                        <ul className="footer__nav__ul">
                            <h3>Email</h3>
                            <li>bernardoantoniod@gmail.com</li>
                            <li>bernardoantoniod@gmail.com</li>
                        </ul>
                        <ul className="footer__nav__ul">
                            <h3>Teléfonos</h3>

                            <li>(56 2)2 384 8000</li>
                            <li>(56 2)2 384 8000</li>
                        </ul>
                    </section>
                </section>
                <section className="botton__rights">
                    <ul>
                        <li>Copyright 2023 G&N Brands</li>
                        <li>Contenido corporativo intern. Prohibida su reproducción.</li>
                    </ul>
                    <ul>
                        <li>Politicas de Privacidad y Términos de uso</li>
                    </ul>
                    <ul>
                        <li>Politicas Corporativas</li>
                    </ul>
                    <ul>
                        <li>Mapa de ubicación</li>
                    </ul>
                </section>
            </section>
        </footer>
    )
}

export default Footer