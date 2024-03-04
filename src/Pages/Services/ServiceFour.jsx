import Layout from "../../Components/Layout/Layout";

function ServiceFour () {
    return (
        <Layout>
            <section className="serviceone__main__container">
                <h1 className="serviceone__title">
                    Asesoría Técnica
                </h1>
                <p className="serviceone__paragraph">
                    Contamos con personal de ingeniería especializado para brindar servicios de asesoría profesional, ofreciendo
                    inspección técnica especializada, proporcionando documentos, procedimientos, y/o protocolos necesarios a nuestros
                    clientes para garantizar la operación y mantenimiento de sus equipos eléctricos, apegados siempre a las normas
                    vigentes que rigen a cada equipamiento (IEEEStd–ANSI/NETA–IEC, entre otras).
                </p>
                <section className="serviceone__article__container-right">
                    <h2>Entre las asesorías contamos con:</h2>
                    <ul className="serviceone__characteristics">
                        <li>Inspección técnica de obra a sistemas eléctricos.</li>
                        <li>Auditoría a equipamiento de fuerza, control y medida.</li>
                        <li>Inspección de pruebas en fabrica (FAT).</li>
                        <li>Ejecución de pruebas en terreno (SAT).</li>
                    </ul>
                    <img className="serviceone__image" src="../../../src/assets/dere-1.jpg" alt="" />
                </section>
            </section>
        </Layout>
    )
}

export default ServiceFour