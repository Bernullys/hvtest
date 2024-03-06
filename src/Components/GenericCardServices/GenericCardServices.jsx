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
    let [hightLightedService, setHightLightedService] = useState(0)
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
                        <p className="card__text__description">PRUEBAS ELÉCTRICAS DE ACEPTACIÓN A EQUIPOS ELÉCTRICOS</p>
                        <MdElectricBolt className="card__service__icon"/>
                        <NavLink to="/servicios/pruebas">
                            <button className="card__service__button">Ver Servicio</button>    
                        </NavLink>
                    </section>
                    <section className={`card--inner--container ${(hightLightedService === 2 ? selectedService : undefined)}`}>
                        <p className="card__text__description">CONTROL Y PROTECCIÓNES ELÉCTRICAS</p>
                        <BiSolidShield className="card__service__icon"/>
                        <NavLink to="/servicios/control">
                            <button className="card__service__button">Ver Servicio</button>    
                        </NavLink>
                    </section>
                    <section className={`card--inner--container ${(hightLightedService === 3 ? selectedService : undefined)}`}>
                        <p className="card__text__description">MANTENIMIENTO Y PUESTA EN SERVICIO DE EQUIPOS ELÉCTRICOS</p>
                        <BsTools className="card__service__icon"/>
                        <NavLink to="/servicios/mantenimiento">
                            <button className="card__service__button">Ver Servicio</button>    
                        </NavLink>
                    </section>
                    <section className={`card--inner--container ${(hightLightedService === 4 ? selectedService : undefined)}`}>
                        <p className="card__text__description">ARRIENDO EQUIPOS DE PRUEBAS ELÉCTRICAS</p>
                        <GiSellCard className="card__service__icon"/>
                        <NavLink to="/servicios/arriendo">
                            <button className="card__service__button">Ver Servicio</button>    
                        </NavLink>
                    </section>
                    <section className={`card--inner--container ${(hightLightedService === 5 ? selectedService : undefined)}`}>
                        <p className="card__text__description">ASESORÍA TÉCNICA</p>
                        <FaHandsHelping className="card__service__icon"/>
                        <NavLink to="/servicios/asesoría">
                            <button className="card__service__button">Ver Servicio</button>    
                        </NavLink>
                    </section>
                </section>
                {/* <section className="card__arrows__container">
                    <IoIosArrowRoundBack className={`card__arrow_left ${hightLightedService === 1 ? firstLastServiceSelected : undefined}`} onClick={handleLeft}/>
                    <IoIosArrowRoundForward className={`card__arrow_left ${hightLightedService === 5 ? firstLastServiceSelected : undefined}`} onClick={handleRight}/>
                </section> */}
            </section>
            <section className="projects__main__container">
                <section className="projects__section__title">
                    <h2 className="projects_title">Proyectos</h2>
                </section>
                <section className="grid__projects_images">
                    <article className="left__project__article">
                        <img src="../../../../hvtest/src/Components/GenericCardServices/assetsGenericCards/chuqui.jpeg" alt="" />
                        <section  className="project__descripcion__main__container_left">
                            <section className="project__descripcion__main__section_left">
                                <h3>División Chuquicamata, Codelco - Precision</h3>
                                <p>Ensayos eléctricos y mantención a equipos de media y baja tensión tales como: Interruptores, CCM's, CDC's, Switchtgears y transformadores.</p>
                                <NavLink to="./contactanos">
                                    <button>Contactanos</button>
                                </NavLink>
                            </section>
                        </section>
                    </article>
                    <section className="right__project__images--container">
                        <article className="right__project__article-one">
                            <img src="../../../../hvtest/src/Components/GenericCardServices/assetsGenericCards/ministrales.jpeg" alt="" />
                            <section className="project__descripcion__main__container_right">
                                <section className="project__descripcion__main__section_right">
                                    <h3>División Ministro Hales, Codelco - Ingelcop</h3>
                                    <p>Ejecución de pruebas eléctricas a transformadores de poder 1 y 2, Subestación Eléctrica 220/23 kV.</p>
                                    <NavLink to="./contactanos">
                                        <button>Contactanos</button>
                                    </NavLink>
                                </section>
                            </section>
                        </article>
                        <article className="right__project__article-two">
                            <img src="../../../../hvtest/src/Components/GenericCardServices/assetsGenericCards/nueva-pandeazucar.jpeg" alt=""/>
                            <section className="project__descripcion__main__container_right">
                                <section className="project__descripcion__main__section_right">
                                    <h3>Subestación Nueva Pan de Azúcar, Isa Interchile - Siemens</h3>
                                    <p>Pruebas SAT, equipo primario de alta tensión {`(compensación de potencia reactiva, línea Pan de Azúcar - Polpaico 500 kV)`}</p>
                                    <NavLink to="./contactanos">
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
                    <section className="logos-container">
                        
                        <img className="logo-cliente" src="../../../../hvtest/src/Components/GenericCardServices/assetsGenericCards/logo-enel-green-power.jpg" alt="logo" />
                        <img className="logo-cliente-mlrental" src="../../../../hvtest/src/Components/GenericCardServices/assetsGenericCards/logo-mlrental.jpeg" alt="logo" />
                        <img className="logo-cliente" src="../../../../hvtest/src/Components/GenericCardServices/assetsGenericCards/logo-fluxsolar.png" alt="logo" />
                        <img className="logo-cliente" src="../../../../hvtest/src/Components/GenericCardServices/assetsGenericCards/logo-ionit.jpeg" alt="logo" />
                    </section>
                </section>

            </section>
        </Layout>
    )
}

export default GenericCardServices