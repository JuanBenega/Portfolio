import { BrightnessHighFill, HouseFill, ArrowDownCircleFill } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({switchMode, mode}) => {

    return (
        <>
            <Navbar expand="lg" collapseOnSelect >
                <Container fluid>
                    <Nav className="header" >
                        <Nav.Link href="/" className={mode==="dark" ? 'oneIcon' : 'oneIconLight'} >
                            <div className='tooltipH'>
                                <HouseFill className={mode==="dark" ? 'icon' : 'iconLight'} size={40} />
                                <span className="tooltiptextH">Home</span>
                            </div>
                        </Nav.Link>
                        <div className='headerMenu'>
                            <Nav.Link className={mode==="dark" ? 'links' :'linksLight'} href='/about' >Sobre mi</Nav.Link>
                            <Nav.Link className={mode==="dark" ? 'links' :'linksLight'} href='/skills'>Habilidades</Nav.Link>
                            <Nav.Link className={mode==="dark" ? 'links' :'linksLight'} href='/projects'>Proyectos</Nav.Link>
                        </div>
                        <div className={mode==="dark" ? "headerSide" : "headerSideLight"} >
                            <div className='tooltipH'>
                                <BrightnessHighFill size={40} className={mode==="dark" ? 'icon' : 'iconLight'} onClick={switchMode} />
                                <span className="tooltiptextH">Mode</span>
                            </div>
                            <a href='https://drive.google.com/file/d/1CVYS6GXP_5IXYuHo8RcSDLlbPlg_lABy/view?usp=share_link' target={'_blank'} className='tooltipH'>
                                <ArrowDownCircleFill size={40} className={mode==="dark" ? 'icon' : 'iconLight'} />
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