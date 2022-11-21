import { Container } from "react-bootstrap"
import laptop from '../img/laptop-removebg-preview.png'
import fondo from '../img/fondo.gif'
import Footer from "./Footer"
import Header from './Header';
import { useContext } from 'react';
import { ModeContext } from "../context/ModeContext";

const Home = () => {

    const { darkMode } = useContext(ModeContext);

    return (
        < div className={darkMode ? "home dark" : "home light"}>
            <Header />
            <Container >
                <div className="homeCont">
                    <img src={fondo} alt="Desarrollo web" className="imgHome" />
                    <div className="homeText">
                        <h1 className="title">Juan Benega</h1>
                        <h3 className="subtitle">Desarrollador Frontend </h3>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Home