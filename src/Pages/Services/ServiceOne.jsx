import Layout from "../../Components/Layout/Layout";
import "./ServiceOne.css"

function ServiceOne () {
    return (
        <Layout>
            <section className="serviceone__main__container">
                <h1 className="serviceone__title">
                    Pruebas Eléctricas de Aceptación a Equipos Eléctricos
                </h1>
                <p className="serviceone__paragraph">
                    Nuestra empresa, consciente de la importancia de la infraestructura eléctrica, 
                    ofrece una amplia gama de servicios especializados en pruebas eléctricas. 
                    Nos especializamos en la evaluación de diversos equipos instalados en sistemas 
                    eléctricos, destacando:
                </p>
                <section className="serviceone__article__container-right">
                    <section>
                        <h2>Transformadores de Potencia</h2>
                        <ul className="serviceone__characteristics">
                            <li>Resistencia de Aislamiento.</li>
                            <li>Relación de transformación y polaridad.</li>
                            <li>Resistencia de Devanados.</li>
                            <li>Corriente de excitación.</li>
                            <li>Factor de Potencia del Aislamiento.</li>
                            <li>SFRA (Análisis de respuesta en frecuencia).</li>
                            <li>Verificación de actuación de protecciones propias.</li>
                        </ul>
                    </section>
                    <img className="serviceone__image" src="../../../../hvtest/src/Pages/Services/assetsServices/tx-1.jpeg" alt="" />
                </section>
                <section className="serviceone__article__container-left">
                    <img className="serviceone__image" src="../../../../hvtest/src/Pages/Services/assetsServices/interruptor.jpeg" alt="" />
                    <section>
                        <h2>Interruptor de Potencia</h2>
                        <ul className="serviceone__characteristics">
                            <li>Resistencia de Aislamiento.</li>
                            <li>Resistencia de Dinámica de contacto.</li>
                            <li>Resistencia de Contacto.</li>
                            <li>Tiempo de apertura - cierre, simultaniedad de contactos.</li>
                            <li>Factor de Potencia del Aislamiento.</li>
                            <li>Medición de Misceláneos (Contactores, resistencia de calefacción, motores de accionamiento).</li>
                        </ul>
                    </section>
                </section>
                <section className="serviceone__article__container-right">
                    <section>
                        <h2>Cable de Media y Alta Tensión</h2>
                        <ul className="serviceone__characteristics">
                            <li>Resistencia de Aislamiento</li>
                            <li>VLF (Muy baja frecuencia).</li>
                            <li>Descarga Parciales.</li>
                            <li>Factor de Potencia de Aislamiento.</li>
                        </ul>
                    </section>
                    <img className="serviceone__image" src="../../../../hvtest/src/Pages/Services/assetsServices/cable-mediatension-2.jpeg" alt="" />
                </section>
                <section className="serviceone__article__container-left">
                    <img className="serviceone__image" src="../../../../hvtest/src/Pages/Services/assetsServices/celda-mediatension.jpeg" alt="" />
                    <section>
                        <h2>Celdas de Media Tensión</h2>
                        <ul className="serviceone__characteristics">
                            <li>Resistencia de Aislamiento.</li>
                            <li>Resistencia de Contacto.</li>
                            <li>Hi-Pot.</li>
                        </ul>
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default ServiceOne