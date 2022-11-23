import { BrightnessHighFill, HouseFill, ArrowDownCircleFill } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { ModeContext } from "../context/ModeContext";

const Header = () => {

    const { changeMode, setchangeMode } = useContext(ModeContext)

    const switchMode = () => {
        changeMode++;
        console.log(changeMode);
    }

    return (
        <>
            <Navbar expand="lg" collapseOnSelect >
                <Container fluid>
                    <Nav className="header" >
                        <Nav.Link href="/" className='oneIcon' >
                            <div className='tooltipH'>
                                <HouseFill className='icon' size={40} />
                                <span className="tooltiptextH">Home</span>
                            </div>
                        </Nav.Link>
                        <div className='headerMenu'>
                            <Nav.Link className='links' href='/about' >Sobre mi</Nav.Link>
                            <Nav.Link className='links' href='/skills'>Habilidades</Nav.Link>
                            <Nav.Link className='links' href='/projects'>Proyectos</Nav.Link>
                        </div>
                        <div className="headerSide" >
                            <div className='tooltipH'>
                                <BrightnessHighFill size={40} className='icon' onClick={switchMode} />
                                <span className="tooltiptextH">Mode</span>
                            </div>
                            <a href='https://drive.google.com/file/d/1CVYS6GXP_5IXYuHo8RcSDLlbPlg_lABy/view?usp=share_link' target={'_blank'} className='tooltipH'>
                                <ArrowDownCircleFill size={40} className='icon' />
                                <span className="tooltiptextH">CV</span>
                            </a>
                        </div>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header