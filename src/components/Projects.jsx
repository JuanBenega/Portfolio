import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Footer from "./Footer"
import Header from "./Header"
import { useContext } from 'react'
import { ModeContext } from "../context/ModeContext"
import cya from '../img/cuerpoyarmonia.PNG'
import palomo from '../img/palomochat.PNG'
import mascotas from '../img/mascotas.PNG'
import cyaecom from '../img/cuerpoyarmoniaecommerce.PNG'



const Projects = () => {

    const { darkMode } = useContext(ModeContext);

    return (
        <div className={darkMode ? "dark" : "light"}>
            <Header />
            <Container fluid>
                <Row className="projectGroup">
                    <Col>
                        <h1 className="projectTitle">Individuales</h1>
                    </Col>
                    <Col>
                        <h1>Sitio web sobre bienestar y salud</h1>
                        <img className="projectImg" src={cya} alt="Ecommerce Cuerpo y Armonía" />
                        <div className="projectLinkGroup">
                            <a href="https://github.com/JuanBenega/Proyecto-Desarrollo-Web" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://juanbenega.github.io/Proyecto-Desarrollo-Web/" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                    <Col>
                    <h1>Ecommerce</h1>
                        <img className="projectImg" src={cyaecom} alt="Ecommerce Cuerpo y Armonía" />
                        <div className="projectLinkGroup">
                            <a href="https://github.com/JuanBenega/proyecto-react" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://proyecto-react-ashen.vercel.app/" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                </Row>
                <Row className="projectGroup">
                    <Col>
                        <h1 className="projectTitle">Colaborativos</h1>
                    </Col>
                    <Col>
                        <h1>Mensajería instantánea</h1>
                        <img className="projectImg" src={palomo} alt="Chat de mensajería instantánea" />
                        <div className="projectLinkGroup">
                            <a href="https://github.com/No-Country/S4-05-T-Java-React" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://palomochat.vercel.app/" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                    <Col>
                    <h1>Portal para mascotas perdidas</h1>
                        <img className="projectImg" src={mascotas} alt="Portal para mascotas perdidas" />
                        <div className="projectLinkGroup">
                            <a href="https://github.com/No-Country/c6-32-m-jquery-node" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://pet-search.netlify.app/home" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Projects