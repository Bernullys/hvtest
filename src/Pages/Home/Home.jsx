import React from "react"
import { NavLink } from "react-router-dom"
import { BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs"
import Layout from "../../Components/Layout/Layout"
import GenericCardServices from "../../Components/GenericCardServices/GenericCardServices"
import "./Home.css"

const Home = () => {
    return (
        <Layout>
          <section id="home" className="home__main--container">
            <section className="home__social__logos__container">
              <a className="footer__solcial__logo" href="https://www.instagram.com/hvtest.cl/" target="_blank" rel="noopener noreferrer">
                <BsInstagram className="insta-logo"/>
              </a>
              <a className="footer__solcial__logo" href="https://www.linkedin.com/company/hv-test" target="_blank" rel="noopener noreferrer">
                  <BsLinkedin className="linke-logo"/>
              </a>
              <a className="footer__solcial__logo" href="" target="_blank" rel="noopener noreferrer">
                  <BsWhatsapp className="whatsapp-logo"/>
              </a>
            </section>
            <section className="main--title--container">
              <h1 className="home__main--title">Servicios <b className="styling__word">de Ingeniería</b> <br></br> de Calidad para la Industria</h1>
              <section className="home__main-buttons-container">
                <NavLink to="./contactanos">
                  <button className="home__main--button--left" >Contactanos</button>
                </NavLink>
                <NavLink to="./proyectos">
                  <button className="home__main--button--rigth">Ver Proyectos</button>
                </NavLink>
              </section>
            </section>
          </section>
            <section className="home__bottom">
              <h2 className="home__botton--title">Bienvenidos a HVTest</h2>
              <section className="home__botton--paragraph--container">
                <p className="home__botton--paragraph">Somos una empresa de servicios electricos conformada por profesionales de ingenieria, especialistas en el area de baja, media y alta tension, orientados a satifaser las exigencias de nuestros clientes.</p>
              </section>
              <section className="home__botton--paragraph--container">
                <NavLink to="./nosotros">
                  <button className="home__bottom--button">Saber más</button>
                </NavLink>
              </section>
            </section>

          <section>
            <GenericCardServices />
          </section>
        </Layout>
    )
}
export default Home