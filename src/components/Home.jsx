import { Container } from "react-bootstrap"
import laptop from '../img/laptop-removebg-preview.png'
import Footer from "./Footer"

const Home = () => {
    return (
        <Container className="home">
            <div className="homeCont">
                <img src={laptop} alt="Desarrollo web" className="imgHome" />
                <div className="homeText">
                    <h1 className="homeTitle">Juan Benega</h1>
                    <h3 className="homeSubTitle">Desarrollador Frontend </h3>
                </div>
            </div>
        </Container>

    )
}

export default Home