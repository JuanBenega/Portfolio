import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
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

const Projects = ({ mode }) => {

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
        <div>
            <Container fluid>
                <Row className="projectGroup">
                    <Col className="column indv">
                        <h1 className="projectTitle">Individuales</h1>
                    </Col>
                    <Col className="column">
                        <h1>Sitio web sobre bienestar y salud</h1>
                        <div className="projectImgGroup">
                            <img id="cya" className={mode === "dark" ? "projectImg" : "projectImgLight"} src={cya} alt="Ecommerce Cuerpo y Armonía" />
                            <div className="projectImgText"><p className="imgText">HTML - CSS - Sass - Bootstrap</p></div>
                        </div>
                        <div className="projectLinkGroup">
                            <a href="https://github.com/JuanBenega/Proyecto-Desarrollo-Web" className={mode === "dark" ? "projectLink" : "projectLinkLight"} target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://juanbenega.github.io/Proyecto-Desarrollo-Web/" className={mode === "dark" ? "projectLink" : "projectLinkLight"} target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                    <Col className="column">
                        <h1>Ecommerce</h1>
                        <div className="projectImgGroup">
                            <img id="cyaEcom" className={mode === "dark" ? "projectImg" : "projectImgLight"} src={cyaecom} alt="Ecommerce Cuerpo y Armonía"  />
                            <div className="projectImgText"><p className="imgText">ReactJS - CSS - Bootstrap - Firebase</p></div>
                        </div>
                        <div className="projectLinkGroup">
                            <a href="https://github.com/JuanBenega/proyecto-react" className={mode === "dark" ? "projectLink" : "projectLinkLight"} target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://proyecto-react-ashen.vercel.app/" className={mode === "dark" ? "projectLink" : "projectLinkLight"} target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                    <Col className="column">
                        <h1>Portfolio</h1>
                        <div className="projectImgGroup">
                            <div className="projectImgGroup">
                                <img id="port" className={mode === "dark" ? "projectImg" : "projectImgLight"} src={portfolio} alt="Ecommerce Cuerpo y Armonía" />
                                <div className="projectImgText"><p className="imgText">ReactJS - CSS - Sass - Bootstrap</p></div>
                            </div>
                        </div>
                        <div className="projectLinkGroup">
                            <a href="https://github.com/JuanBenega/Portfolio" className={mode === "dark" ? "projectLink" : "projectLinkLight"} target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://jbenega.vercel.app/" className={mode === "dark" ? "projectLink" : "projectLinkLight"} target={'_blank'}>
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
                        <div className="projectImgGroup">
                            <img id="pal" className={mode === "dark" ? "projectImg" : "projectImgLight"} src={palomo} alt="Chat de mensajería instantánea" />
                            <div className="projectImgText"><p className="imgText">ReacJS - CSS - Sass</p></div>
                        </div>
                        <div className="projectLinkGroup">
                            <a href="https://github.com/No-Country/S4-05-T-Java-React" className={mode === "dark" ? "projectLink" : "projectLinkLight"} target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://palomochat.vercel.app/" className={mode === "dark" ? "projectLink" : "projectLinkLight"} target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                    <Col className="column">
                        <h1>Portal para mascotas perdidas</h1>
                        <div className="projectImgGroup">
                            <img id="masc" className={mode === "dark" ? "projectImg" : "projectImgLight"} src={mascotas} alt="Portal para mascotas perdidas" />
                            <div className="projectImgText"><p className="imgText">ReactJS - Bootstrap - API Request</p></div>
                        </div>
                        <div className="projectLinkGroup">
                            <a href="https://github.com/No-Country/c6-32-m-jquery-node" className={mode === "dark" ? "projectLink" : "projectLinkLight"} target={'_blank'}>
                                <h3 className="subtitle">Github</h3></a>
                            <a href="https://pet-search.netlify.app/home" className={mode === "dark" ? "projectLink" : "projectLinkLight"} target={'_blank'}>
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
                        <div className="projectImgGroup">
                        <img id="nocode" className={mode === "dark" ? "projectImg" : "projectImgLight"} src={nocode} alt="Chat de mensajería instantánea" />
                        <div className="projectImgText"><p className="imgText">Bubble - Google API - Stripe API</p></div>
                        </div>
                        <div className="projectLinkGroup">
                            <a href="https://my-rent-place.bubbleapps.io/version-test/index" className={mode === "dark" ? "projectLink" : "projectLinkLight"} target={'_blank'}>
                                <h3 className="subtitle">Deploy</h3></a>
                        </div>
                    </Col>
                    <Col className="column">
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects