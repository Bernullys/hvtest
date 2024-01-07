import Layout from "../../Components/Layout/Layout";
import { BsLinkedin } from "react-icons/bs"
import "./Us.css"

const PersonalCards = ({ profileImage, name, position, linkTolinkedin }) => {
    return (
        <Layout>
            <article className="personal__card__container">
                <section className="image__card__container">
                    <img src={profileImage} alt="" />
                </section>
                <section className="text-content__card__container">
                    <h3>{name}</h3>
                    <h4>{position}</h4>
                    <section className="us__social__logos__container--personal-card">
                        <a className="footer__solcial__logo" href={linkTolinkedin} target="_blank" rel="noopener noreferrer">
                            <BsLinkedin className="card-linke-logo"/>
                        </a>
                    </section>
                </section>
            </article>
        </Layout>
    )
}

export default PersonalCards