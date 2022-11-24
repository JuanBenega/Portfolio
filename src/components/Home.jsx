import { Container } from "react-bootstrap"
import laptop from '../img/laptop-removebg-preview.png'
import fondo from '../img/fondo.gif'
import Footer from "./Footer"
import Header from './Header';
import { useContext } from 'react';
import { ModeContext } from "../context/ModeContext";
import { NavLink } from "react-router-dom";

const Home = ({switchMode}) => {


    return (
        < div className="home">
            <Container >
                <div className="homeCont">
                    <img src={fondo} alt="Desarrollo web" className="imgHome" />
                    <NavLink to={"/about"} className="homeText">
                        <h1 className="title">Juan Benega</h1>
                        <h3 className="subtitle">Desarrollador Frontend </h3>
                    </NavLink>
                </div>
            </Container>
        </div>
    )
}

export default Home