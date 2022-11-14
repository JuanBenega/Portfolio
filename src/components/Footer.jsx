import Container from 'react-bootstrap/Container';
import { Linkedin, Github, EnvelopeFill } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <Container fluid className='footerMenu'>
                <a target={'_blank'} href="mailto:jmbenega@gmail.com"><EnvelopeFill size={40} className='icon' /></a>
                <a target={'_blank'} href="https://www.linkedin.com/in/juanbenegadesarrolloweb/"><Linkedin size={40} className='icon' /></a>
                <a target={'_blank'} href="https://github.com/JuanBenega"><Github className='icon' size={40} /></a>
        </Container>
    )
}

export default Footer