import Container from 'react-bootstrap/Container';
import { Linkedin, Github, EnvelopeFill } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <Container fluid className='footer'>
            <div className='footerMenu'>
                <a target={'_blank'} href="mailto:jmbenega@gmail.com" className='tooltip'>
                    <EnvelopeFill size={40} className='icon' />
                    <span className="tooltiptext">Mail</span>
                </a>
                <a target={'_blank'} href="https://www.linkedin.com/in/juanbenegadesarrolloweb/" className='tooltip'>
                    <Linkedin size={40} className='icon' />
                    <span className="tooltiptext">Linkedin</span>
                </a>
                <a target={'_blank'} href="https://github.com/JuanBenega" className='tooltip'>
                    <Github className='icon' size={40} />
                    <span className="tooltiptext">Github</span>
                </a>
            </div>
            <p>Contactame</p>
        </Container>
    )
}

export default Footer