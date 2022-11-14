import { Container } from "react-bootstrap"
import foto from "../img/juanBenega.jpg"
import Footer from "./Footer"
import Header from './Header';
import { useContext } from 'react';
import { ModeContext } from "../context/ModeContext";

const About = () => {

    const { darkMode } = useContext(ModeContext);

    return (
        < div className={darkMode ? "home dark" : "home light"}>
            <Header />
        <Container className="about">
            <div className="aboutCont">
                <img src={foto} alt="Desarrollo web" className="aboutImg" />
                <div className="aboutText">
                    <h1 className="aboutTitle">Sobre mi</h1>
                    <h3 className="aboutSubTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde temporibus fuga magnam corrupti rerum ab optio blanditiis provident necessitatibus, hic molestias recusandae ullam cum eligendi expedita culpa esse, atque dolorum? </h3>
                </div>
            </div>
        </Container>
        <Footer />
        </div>
    )
}

export default About