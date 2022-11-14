import { hover } from "@testing-library/user-event/dist/hover"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Skills = () => {
    return (
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
                    <img className="icon thumbails" src="https://www.jorgeagoiz.es/favicon.ico" alt="Vercel" />
                </a>
                <a target={'_blank'} href="https://bubble.io/">
                    <img className="icon thumbails" src="https://s3.amazonaws.com/appforest_uf/f1530294839424x143528842134401200/Icon-no-clearspace.png" alt="Bubble" />
                </a>
            </div>
        </Container>
    )
}

export default Skills