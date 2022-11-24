import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import cya from '../img/cuerpoyarmonia.PNG'
import palomo from '../img/palomochat.PNG'
import mascotas from '../img/mascotas.PNG'
import cyaecom from '../img/cuerpoyarmoniaecommerce.PNG'
import portfolio from '../img/portfolio.PNG'
import nocode from '../img/NoCode.PNG'

const Projects = ({ mode }) => {

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