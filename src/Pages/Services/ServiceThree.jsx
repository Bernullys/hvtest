import Layout from "../../Components/Layout/Layout"
import './ServiceThree.css'

function ServiceThree () {
    return (
        <Layout>
            <section className="serviceone__main__container">
                <h1 className="serviceone__title">
                    Mantenimiento y Puesta en Servicio de Equipos Eléctricos
                </h1>
                <p className="serviceone__paragraph">
                    Con el fin de garantizar la integridad de tus sistemas eléctricos, parte importante de nuestro servicio es la mantención y puesta en
                    marcha de los equipos eléctricos instalados en cada subsistema eléctrico (Generación, transmision y distribución eléctrica), abarcando
                    la mayoría del equipamento eléctrico instalado en cualquiera de estos subsistemas.
                </p>
                <section className="serviceone__article__container-right">
                    <h2>Entre los equipos que intervenimos tenemos:</h2>
                    <ul className="serviceone__characteristics">
                        <li>Transformadores de potencia.</li>
                        <li>Interruptores de baja, media y alta tensión.</li>
                        <li>Desconectadores.</li>
                        <li>Trampas de onda.</li>
                        <li>Resistencias de puesta a tierra.</li>
                        <li>Transformadores de potencial.</li>
                        <li>Transformadores de corriente.</li>
                        <li>Banco de Condensadores.</li>
                        <li>Cables o conductores eléctricos.</li>
                        <li>Descargadores de sobretensiones.</li>
                        <li>Protecciones y Controles eléctricos.</li>
                        <li>Celdas de media y baja tensión.</li>
                        <li>Variadores de Frecuencia.</li>
                    </ul>
                    <img className="serviceone__image" src="../../../src/assets/dere-1.jpg" alt="" />
                </section>
            </section>
        </Layout>
    )
}

export default ServiceThree