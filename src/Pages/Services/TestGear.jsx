import Layout from "../../Components/Layout/Layout"
import "./TestGear.css"

function TestGears ( { name, brand, model, image, description, characteristics, eett }) {
    return (
        <section className="testgear__article__main__container">
            <article className="testgear__article__container">
                <section className="testgear__image__container">
                    <img src={image} alt="Equipo-de-medida.eléctrica" className="testgear__image"/>
                </section>
                <h1 className="testgear__name">{name}</h1>
                <h2 className="testgear__brand">Marca: {brand}</h2>
                <h2 className="testgear__model">Modelo: {model}</h2>
                <h4 className="testgear__subtitle">Descripción:</h4>
                <p className="testgear__description">{description}</p>
                <a href={eett} target="_blank" rel="noopener noreferrer">Ficha técnica</a>
            </article>
        </section>
    )
}

export default TestGears