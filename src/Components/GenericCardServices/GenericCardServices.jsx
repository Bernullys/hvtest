import React, { useState } from "react";
import { NavLink } from "react-router-dom"
import Layout from "../Layout/Layout"
import { GiSellCard  } from "react-icons/gi"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import { FaHandsHelping } from "react-icons/fa"
import { BsTools } from "react-icons/bs"
import { MdElectricBolt } from "react-icons/md"
import { BiSolidShield } from "react-icons/bi"
import "./GenericCardServices.css"

const GenericCardServices = () => {

    const firstLastServiceSelected = "card__arrows_end"
    const selectedService = "card--inner--container--selected card--inner--container--selected p"
    let [hightLightedService, setHightLightedService] = useState(3)
    const totalServices = 5
    const handleRight = () => {
        if (hightLightedService < totalServices) {
            hightLightedService++
        }
        setHightLightedService(hightLightedService)
    }
    const handleLeft = () => {
        if (hightLightedService > 1) {
            hightLightedService--
        }
        setHightLightedService(hightLightedService)
    }

    return (

        <Layout>
            <section className="card__main__container">
                <h2 className="card__main__title">Nuestros Servicios</h2>
                <section className="card--outer--container">
                    <section className={`card--inner--container ${(hightLightedService === 1 ? selectedService : undefined)}`}>
                        <MdElectricBolt className="card__service__icon"/>
                        <p className="card__text__description">PRUEBAS ELÉCTRICAS DE ACEPTACIÓN A EQUIPOS ELÉCTRICOS</p>
                        <button className="card__service__button">Ver Servicio</button>    
                    </section>
                    <section className={`card--inner--container ${(hightLightedService === 2 ? selectedService : undefined)}`}>
                        <BiSolidShield className="card__service__icon"/>
                        <p className="card__text__description">CONTROL Y PROTECCIÓNES ELÉCTRICAS</p>
                        <button className="card__service__button">Ver Servicio</button>    
                    </section>
                    <section className={`card--inner--container ${(hightLightedService === 3 ? selectedService : undefined)}`}>
                        <BsTools className="card__service__icon"/>
                        <p className="card__text__description">MANTENIMIENTO Y PUESTA EN SERVICIO DE EQUIPOS ELÉCTRICOS</p>
                        <button className="card__service__button">Ver Servicio</button>    
                    </section>
                    <section className={`card--inner--container ${(hightLightedService === 4 ? selectedService : undefined)}`}>
                        <GiSellCard className="card__service__icon"/>
                        <p className="card__text__description">ARRIENDO EQUIPOS DE PRUEBAS ELÉCTRICAS</p>
                        <button className="card__service__button">Ver Servicio</button>    
                    </section>
                    <section className={`card--inner--container ${(hightLightedService === 5 ? selectedService : undefined)}`}>
                        <FaHandsHelping className="card__service__icon"/>
                        <p className="card__text__description">ASESORÍA TÉCNICA</p>
                        <button className="card__service__button">Ver Servicio</button>    
                    </section>
                </section>
                <section className="card__arrows__container">
                    <IoIosArrowRoundBack className={`card__arrow_left ${hightLightedService === 1 ? firstLastServiceSelected : undefined}`} onClick={handleLeft}/>
                    <IoIosArrowRoundForward className={`card__arrow_left ${hightLightedService === 5 ? firstLastServiceSelected : undefined}`} onClick={handleRight}/>
                </section>
            </section>
            <section className="projects__main__container">
                <section className="projects__section__title">
                    <h2 className="projects_title">Proyectos</h2>
                </section>
                <section className="grid__projects_images">
                    <article className="left__project__article">
                        <img src="../../../src/assets/dere-3.jpg" alt="" />
                        <section  className="project__descripcion__main__container_left">
                            <section className="project__descripcion__main__section_left">
                                <h3>NOMBRE DEL CLIENTE</h3>
                                <p>Breve descripción del proyecto Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque . . .</p>
                                <NavLink to="./contacto">
                                    <button>Contactanos</button>
                                </NavLink>
                            </section>
                        </section>
                    </article>
                    <section className="right__project__images--container">
                        <article className="right__project__article-one">
                            <img src="../../../src/assets/dere-3.jpg" alt="" />
                            <section className="project__descripcion__main__container_right">
                                <section className="project__descripcion__main__section_right">
                                    <h3>NOMBRE DEL CLIENTE2</h3>
                                    <p>Breve descripción del proyecto Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque . . .</p>
                                    <NavLink to="./contacto">
                                        <button>Contactanos</button>
                                    </NavLink>
                                </section>
                            </section>
                        </article>
                        <article className="right__project__article-two">
                            <img src="../../../src/assets/dere-3.jpg" alt=""/>
                            <section className="project__descripcion__main__container_right">
                                <section className="project__descripcion__main__section_right">
                                    <h3>NOMBRE DEL CLIENTE3</h3>
                                    <p>Breve descripción del proyecto Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque . . .</p>
                                    <NavLink to="./contacto">
                                        <button>Contactanos</button>
                                    </NavLink>
                                </section>
                            </section>
                        </article>
                    </section>
                </section>

            </section>
            <section>
                <section className="projects__section__title">
                    <h2 className="projects_title">Clientes</h2>
                </section>

            </section>
        </Layout>
    )
}

export default GenericCardServices