import Layout from "../../Components/Layout/Layout"

function ServiceTwo () {
    return (
        <Layout>
            <section className="serviceone__main__container">
                <h1 className="serviceone__title">
                    Control y Protecciones Eléctricas
                </h1>
                <p className="serviceone__paragraph">
                    Disponemos de personal y equipamiento para proveer una amplia gama de soluciones que incluyen: Inspecciones
                    técnicas de obra al sistema secundario de subestaciones, así como auditorías a los sistemas de control, protección
                    y medida; asegurando la eficiencia y confiabilidad de los sistemas eléctricos.
                    Adicionalmente, ofrecemos servicios de ejecución, inspección de pruebas en fábrica y en terreno (FAT - SAT),
                    llevando a cabo pruebas funcionales exhaustivas, verificando todas las facetas del sistema, desde el cableado y
                    los armarios hasta los servicios auxiliares, asegurando que los equipos cumplan con todos los estándares y
                    especificaciones antes de su implementación.
                </p>
                <section className="serviceone__article__container-right">
                    <h2>Desarrollo de Ingeniería, control y protección:
                        <h3>Ingeniería Básica:
                            <ul className="serviceone__characteristics">
                                <li>Desarrollo de Diagramas Lógicos.</li>
                                <li>Arquitectura de Comunicaciones y Protecciones Eléctricas.</li>
                            </ul>
                        </h3>
                        <h3>Ingeniería de Detalle:
                            <ul className="serviceone__characteristics">
                                <li>Revisión de detalles técnicos y diagramas elementales de corriente alterna y corriete continua.</li>
                            </ul>
                        </h3>
                    </h2> 
                    <img className="serviceone__image" src="../../../src/assets/dere-1.jpg" alt="" />
                </section>
                <section className="serviceone__article__container-left">
                    <img className="serviceone__image" src="../../../src/assets/dere-1.jpg" alt="" />
                    <h2>Sistema de Protección, Control y SCADA:
                        <h3>Auditoría a los sistemas de control, protección y medida.</h3>
                        <h3>Inspección técnica de obra a los sistemas secundarios de subestaciones.</h3>
                        <h3>Actualización de los sistemas de protección y control.</h3>
                    </h2>
                </section>
            </section>
        </Layout>
    )
}

export default ServiceTwo