import { Container } from "react-bootstrap"
import fondo from '../img/fondo.gif'
import fondoLight from '../img/fondo2.gif'
import { NavLink } from "react-router-dom";

const Home = ({mode}) => {
    console.log(mode);
    return (
        < div className="home">
            <Container >
                <div className="homeCont">
                    <img src={mode=="dark" ? fondo : fondoLight} alt="Desarrollo web" className={mode=="dark" ? "imgHome" : "imgHomeLight"} />
                    <NavLink to={"/about"} className={mode=="dark" ? "homeText" : "homeTextLight"} >
                        <h1 className="title">Juan Benega</h1>
                        <h3 className="subtitle">Desarrollador Frontend </h3>
                    </NavLink>
                </div>
            </Container>
        </div>
    )
}

export default Home