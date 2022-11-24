import { Container } from "react-bootstrap"
import foto from "../img/juanBenega.jpg"

const About = () => {

    return (
            <Container className="about">
                <div className="aboutCont">
                    <img src={foto} alt="Desarrollo web" className="aboutImg" />
                    <div className="aboutText">
                        <h1 className="aboutTitle">Sobre mi</h1>
                        <h3 className="aboutSubTitle">Hola soy Juan, de Argentina. Estudio la carrera de Desarrollo <br />Fullstack en Coderhouse.
                            <br />Tengo 12 años de experiencia laboral en seguridad electrónica corporativa, he adquirido habilidades de liderazgo de equipos,
                            resolución de problemas y gestión de proyectos que puedo aportar a los grupos de trabajo que integre.
                            <br />Estoy buscando dar un vuelco en mi carrera profesional hacia el desarrollo web y de aplicaciones. <br />Quiero
                            encontrar entornos ágiles de mi interés donde poder desarrollar mi potencial, valorando el balance entre la vida
                            personal y profesional.
                        </h3>
                    </div>
                </div>
            </Container>
    )
}

export default About