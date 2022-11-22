import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Footer from "./Footer"
import Header from "./Header"
import { useContext } from 'react'
import { ModeContext } from "../context/ModeContext"
import cya from '../img/cuerpoyarmonia.PNG'
import cya2 from '../img/cuerpoyarmonia2.PNG'
import palomo from '../img/palomochat.PNG'
import palomo2 from '../img/palomochat2.png'
import mascotas from '../img/mascotas.PNG'
import mascotas2 from '../img/mascotas2.png'
import cyaecom from '../img/cuerpoyarmoniaecommerce.PNG'
import cyaecom2 from '../img/cuerpoyarmoniaecommerce2.png'
import portfolio from '../img/portfolio.PNG'
import portfolio2 from '../img/portfolio2.png'
import nocode from '../img/NoCode.PNG'
import nocode2 from '../img/nocode2.png'

const Projects = () => {

    const { darkMode } = useContext(ModeContext);

    const modifImg = (e) => {
        switch (e.target.id) {
            case "cya":
                e.target.src = cya2;
                break;
            case "cyaEcom":
                e.target.src = cyaecom2;
                break;
            case "port":
                e.target.src = portfolio2;
                break;
            case "pal":
                e.target.src = palomo2;
                break;
            case "masc":
                e.target.src = mascotas2;
                break;
            case "nocode":
                e.target.src = nocode2;
                break;
            default:
                break;
        }

    }

    const restImg = (e) => {
        switch (e.target.id) {
            case "cya":
                e.target.src = cya;
                break;
            case "cyaEcom":
                e.target.src = cyaecom;
                break;
            case "port":
                e.target.src = portfolio;
                break;
            case "pal":
                e.target.src = palomo;
                break;
            case "masc":
                e.target.src = mascotas;
                break;
            case "nocode":
                e.target.src = nocode;
                break;
            default:
                break;
        }
    }

    return (
        <div className={darkMode ? "dark" : "light"}>
            <Header />
            <Container fluid>
                <Row className="projectGroup">
                    <Col className="column indv">
                        <h1 className="projectTitle">Individuales</h1>
                    </Col>
                    <Col className="column">
                        <h1>Sitio web sobre bienestar y salud</h1>
                        <div className="projectImgGroup">
                            <img id="cya" className="projectImg" src={cya} alt="Ecommerce Cuerpo y Armonía" onMouseEnter={(e) => { modifImg(e) }} onMouseLeave={(e) => { restImg(e) }} />
                        </div>
                        <div className="projectLinkGroup">
                            <a href="https://github.com/JuanBenega/Proyecto-Desarrollo-Web" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://juanbenega.github.io/Proyecto-Desarrollo-Web/" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                    <Col className="column">
                        <h1>Ecommerce</h1>
                        <img id="cyaEcom" className="projectImg" src={cyaecom} alt="Ecommerce Cuerpo y Armonía" onMouseEnter={(e) => { modifImg(e) }} onMouseLeave={(e) => { restImg(e) }} />
                        <div className="projectLinkGroup">
                            <a href="https://github.com/JuanBenega/proyecto-react" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://proyecto-react-ashen.vercel.app/" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                    <Col className="column">
                        <h1>Portfolio</h1>
                        <div className="projectImgGroup">
                            <img id="port" className="projectImg" src={portfolio} alt="Ecommerce Cuerpo y Armonía" onMouseEnter={(e) => { modifImg(e) }} onMouseLeave={(e) => { restImg(e) }} />
                        </div>
                        <div className="projectLinkGroup">
                            <a href="https://github.com/JuanBenega/Portfolio" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://jbenega.vercel.app/" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                </Row>
                <Row className="projectGroup" lg={3}>
                    <Col className="column">
                        <h1 className="projectTitle">Colaborativos</h1>
                    </Col>
                    <Col className="column">
                        <h1>Mensajería instantánea</h1>
                        <img id="pal" className="projectImg" src={palomo} alt="Chat de mensajería instantánea" onMouseEnter={(e) => { modifImg(e) }} onMouseLeave={(e) => { restImg(e) }} />
                        <div className="projectLinkGroup">
                            <a href="https://github.com/No-Country/S4-05-T-Java-React" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://palomochat.vercel.app/" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                    <Col className="column">
                        <h1>Portal para mascotas perdidas</h1>
                        <img id="masc" className="projectImg" src={mascotas} alt="Portal para mascotas perdidas" onMouseEnter={(e) => { modifImg(e) }} onMouseLeave={(e) => { restImg(e) }} />
                        <div className="projectLinkGroup">
                            <a href="https://github.com/No-Country/c6-32-m-jquery-node" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://pet-search.netlify.app/home" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                </Row>
                <Row className="projectGroup" lg={3}>
                    <Col className="column">
                        <h1 className="projectTitle">NoCode</h1>
                    </Col>
                    <Col className="column">
                        <h1>Alquiler de hospedaje</h1>
                        <img id="nocode" className="projectImg" src={nocode} alt="Chat de mensajería instantánea" onMouseEnter={(e) => { modifImg(e) }} onMouseLeave={(e) => { restImg(e) }} />
                        <div className="projectLinkGroup">
                            <a href="https://my-rent-place.bubbleapps.io/version-test/index" className="projectLink" target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                    <Col className="column">
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Projects