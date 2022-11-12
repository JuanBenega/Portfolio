import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <>
            <Navbar expand="lg" collapseOnSelect sticky="top" >
                <Container fluid>
                    <Nav className="justify-content-center footer" activeKey="/home">
                        <Nav.Link href="https://www.linkedin.com/in/juanbenegadesarrolloweb/"><Envelope size={40} className='icon' /></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/juanbenegadesarrolloweb/"><Linkedin size={40} className='icon' /></Nav.Link>
                        <Nav.Link href="https://github.com/JuanBenega"><Github className='icon' size={40} /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Footer