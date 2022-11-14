import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { HouseFill, BrightnessHighFill } from 'react-bootstrap-icons';

const Header = () => {
    
   
    return (
        <>
            <Navbar expand="lg" collapseOnSelect sticky="top" >
                <Container fluid>
                    <Nav className="header" activeKey="/">
                        <Nav.Link href="/" className='oneIcon' ><HouseFill className='icon' size={40} /></Nav.Link>
                        <div className='headerMenu'>
                            <Nav.Link className='links' href='/about' activeKey="/about">SOBRE MI</Nav.Link>
                            <Nav.Link className='links' href='/skills'>HABILIDADES</Nav.Link>
                            <Nav.Link className='links' href='/projects'>PROYECTOS</Nav.Link>
                        </div>
                        <div className="oneIcon"><BrightnessHighFill size={40} className='icon' /></div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header