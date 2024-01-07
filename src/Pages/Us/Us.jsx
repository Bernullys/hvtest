import Layout from "../../Components/Layout/Layout";
import { BsInstagram, BsLinkedin, BsWhatsapp} from "react-icons/bs"
import { GrTechnology } from "react-icons/gr"
import "./Us.css"
import PersonalCards from "./PersonalCards";

const workersInfo = [
    {
        name: "Jose Manuel Freitez",
        position: "Ingeniero Eléctricista",
        profileImage: "../../../../hvtest/src/Pages/Us/assetsUs/profile.jpg",
        linkTolinkedin: "https://www.linkedin.com/in/jos%C3%A9-manuel-freitez-martos-932190bb/"
    },
    {
        name: "Leonardo Alejandro Nuñez",
        position: "Ingeniero Eléctricista",
        profileImage: "../../../../hvtest/src/Pages/Us/assetsUs/profile.jpg",
        linkTolinkedin: "https://www.linkedin.com/in/leonardo-alejandro-nu%C3%B1ez-araujo-0a465979/"
    }
]

const Us = () => {
    return (
        <Layout>
            <section className="us__top__section--main--container">
                <section className="us__social__logos__container">
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
                <section className="us__top__section--image--container">
                    <h1 className="us__top__section--heding">Excepteur <b className="styling__word">sint occaecat</b> <br />cupidatat non proident</h1>
                </section>
            </section>
            <section className="us__middle__section--main--container">
                <section className="us__middle__section--description--container">
                    <h2 className="us__subtitle">Conoce nuestro equipo</h2>
                    <p className="us__paragraph">Estamos conformados por profesionales de alto grado de experiencia en el mercado eléctrico del país, presentes en faenas de importantes empresas del rubro eléctrico, especialistas en el diagnóstico, mantención, resolución de problemas y soluciones integrales en el ámbito eléctrico, industrial y de manufactura. Nuestro servicio profesional y técnico está comprometido en la entrega de un servicio de calidad con altos estándares de calidad y seguridad. </p>
                </section>
                <section className="us__middle__section--cards--container">
                    {
                        workersInfo.map(worker => (
                            <PersonalCards
                            key={worker.name}
                            name={worker.name}
                            position={worker.position}
                            profileImage={worker.profileImage}
                            linkTolinkedin={worker.linkTolinkedin}
                            />
                        ))
                    }
                </section>
            </section>
            <section className="us__lower__section--main--container">
                <section className="us__lower__section--container">
                    <h2 className="us__subtitle">¿Por que trabajar con nosotros?</h2>
                    <p className="us__paragraph">Estamos conformados por profesionales de alto grado de experiencia en el mercado eléctrico del país, presentes en faenas de importantes empresas del rubro eléctrico, especialistas en el diagnóstico, mantención, resolución de problemas y soluciones integrales en el ámbito eléctrico, industrial y de manufactura. Nuestro servicio profesional y técnico está comprometido en la entrega de un servicio de calidad con altos estándares de calidad y seguridad. </p>
                </section>
                <section className="us__lower__section__characteristics--main--container">
                    <article>
                        <GrTechnology className="us__lower__icon--one"/>
                        <h2>caracteristica</h2>
                        <ul>
                            <li>casasadad</li>
                            <li>casasadad</li>
                            <li>casasadad</li>
                        </ul>
                    </article>
                    <article>
                        <GrTechnology className="us__lower__icon--one"/>
                        <h2>caracteristica</h2>
                        <ul>
                            <li>casasadad</li>
                            <li>casasadad</li>
                            <li>casasadad</li>
                        </ul>
                    </article>
                    <article>
                        <GrTechnology className="us__lower__icon--one"/>
                        <h2>caracteristica</h2>
                        <ul>
                            <li>casasadad</li>
                            <li>casasadad</li>
                            <li>casasadad</li>
                        </ul>
                    </article>

                </section>

            </section>
        </Layout>
    )
}

export default Us;