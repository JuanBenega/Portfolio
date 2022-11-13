import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <Container fluid className='footerMenu'>
                <Nav.Link href="https://www.linkedin.com/in/juanbenegadesarrolloweb/"><Envelope size={40} className='icon' /></Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/juanbenegadesarrolloweb/"><Linkedin size={40} className='icon' /></Nav.Link>
                <Nav.Link href="https://github.com/JuanBenega"><Github className='icon' size={40} /></Nav.Link>
        </Container>
    )
}

export default Footer