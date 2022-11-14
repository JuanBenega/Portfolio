import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from './Header';
import { useContext } from 'react';
import { ModeContext } from "../context/ModeContext";

const Skills = () => {

    const { darkMode } = useContext(ModeContext);

    return (
        < div className={darkMode ? "dark" : "light"}>
            <Header />
            <Container className="skills">
                <h1>Habilidades</h1>
                <div className="skillsIcons">
                    <a target={'_blank'} href="https://developer.mozilla.org/es/docs/Glossary/HTML5">
                        <img className="icon thumbails" src="https://img.icons8.com/color/512/html-5.png" alt="HTML5" />
                    </a>
                    <a target={'_blank'} href="https://developer.mozilla.org/es/docs/Web/CSS">
                        <img className="icon thumbails" src="https://img.icons8.com/fluency/512/css3.png" alt="CSS3" />
                    </a>
                    <a target={'_blank'} href="https://developer.mozilla.org/es/docs/Web/JavaScript">
                        <img className="icon thumbails" src="https://img.icons8.com/color/512/javascript.png" alt="Javascript" />
                    </a>
                    <a target={'_blank'} href="https://es.reactjs.org/">
                        <img className="icon thumbails" src="https://img.icons8.com/plasticine/512/react.png" alt="ReactJS" />
                    </a>
                    <a target={'_blank'} href="https://sass-lang.com/">
                        <img className="icon thumbails" src="https://img.icons8.com/color/512/sass-avatar.png" alt="Sass" />
                    </a>
                    <a target={'_blank'} href="https://getbootstrap.com/">
                        <img className="icon thumbails" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" />
                    </a>
                    <a target={'_blank'} href="https://git-scm.com/">
                        <img className="icon thumbails" src="https://img.icons8.com/color/512/git.png" alt="GIT" />
                    </a>
                    <a target={'_blank'} href="https://github.com/">
                        <img className="icon thumbails" src="https://img.icons8.com/ios-glyphs/512/github.png" alt="GitHub" />
                    </a>
                    <a target={'_blank'} href="https://vercel.com/">
                        <img className="icon thumbails" src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67" alt="Vercel" />
                    </a>
                    <a target={'_blank'} href="https://bubble.io/">
                        <img className="icon thumbails" src="https://i.ibb.co/NYp3kSN/Imagen2.png" alt="Bubble" />
                    </a>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Skills