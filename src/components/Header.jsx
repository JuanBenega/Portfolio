import { BrightnessHighFill, HouseFill } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { ModeContext } from "../context/ModeContext";

const Header = () => {
    
    const { changeMode , setchangeMode } = useContext(ModeContext)

    const switchMode = () => {
        changeMode++;
        console.log(changeMode);
    }
   
    return (
        <>
            <Navbar expand="lg" collapseOnSelect >
                <Container fluid>
                    <Nav className="header" >
                        <Nav.Link href="/" className='oneIcon sticky' ><HouseFill className='icon' size={40} /></Nav.Link>
                        <div className='headerMenu'>
                            <Nav.Link className='links' href='/about' >Sobre mi</Nav.Link>
                            <Nav.Link className='links' href='/skills'>Habilidades</Nav.Link>
                            <Nav.Link className='links' href='/projects'>Proyectos</Nav.Link>
                        </div>
                        <div className="oneIcon blur" onClick={switchMode}><BrightnessHighFill size={40} className='blur' /></div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header