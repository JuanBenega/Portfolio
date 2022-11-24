import { Container } from "react-bootstrap";


const Skills = () => {


    return (
        < div>
            <Container className="skills">
                <h1>Habilidades</h1>
                <div className="skillsIcons">
                    <a target={'_blank'} href="https://developer.mozilla.org/es/docs/Glossary/HTML5" className="tooltip">
                        <img className="icon thumbails" src="https://img.icons8.com/color/512/html-5.png" alt="HTML5" />
                        <span className="tooltiptext">HTML 5</span>
                    </a>
                    <a target={'_blank'} href="https://developer.mozilla.org/es/docs/Web/CSS" className="tooltip">
                        <img className="icon thumbails" src="https://img.icons8.com/fluency/512/css3.png" alt="CSS3" />
                        <span className="tooltiptext">CSS 3</span>
                    </a>
                    <a target={'_blank'} href="https://developer.mozilla.org/es/docs/Web/JavaScript" className="tooltip">
                        <img className="icon thumbails" src="https://img.icons8.com/color/512/javascript.png" alt="Javascript" />
                        <span className="tooltiptext">Javascript</span>
                    </a>
                    <a target={'_blank'} href="https://es.reactjs.org/" className="tooltip">
                        <img className="icon thumbails" src="https://img.icons8.com/plasticine/512/react.png" alt="ReactJS" />
                        <span className="tooltiptext">React JS</span>
                    </a>
                    <a target={'_blank'} href="https://sass-lang.com/" className="tooltip">
                        <img className="icon thumbails" src="https://img.icons8.com/color/512/sass-avatar.png" alt="Sass" />
                        <span className="tooltiptext">Sass</span>
                    </a>
                    <a target={'_blank'} href="https://getbootstrap.com/" className="tooltip">
                        <img className="icon thumbails" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" />
                        <span className="tooltiptext">Bootstrap</span>
                    </a>
                    <a target={'_blank'} href="https://firebase.google.com/?hl=es" className="tooltip">
                        <img className="icon thumbails" src="https://img.icons8.com/color/512/firebase.png" alt="Firebase" />
                        <span className="tooltiptext">Firebase</span>
                    </a>
                    <a target={'_blank'} href="https://git-scm.com/" className="tooltip">
                        <img className="icon thumbails" src="https://img.icons8.com/color/512/git.png" alt="GIT" />
                        <span className="tooltiptext">Git</span>
                    </a>
                    <a target={'_blank'} href="https://github.com/" className="tooltip">
                        <img className="icon thumbails" src="https://img.icons8.com/ios-glyphs/512/github.png" alt="GitHub" />
                        <span className="tooltiptext">Github</span>
                    </a>
                    <a target={'_blank'} href="https://vercel.com/" className="tooltip">
                        <img className="icon thumbails" src="https://camo.githubusercontent.com/add2c9721e333f0043ac938f3dadbc26a282776e01b95b308fcaba5afaf74ae3/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313538383830353835382f7265706f7369746f726965732f76657263656c2f6c6f676f2e706e67" alt="Vercel" />
                        <span className="tooltiptext">Vervel</span>
                    </a>
                    <a target={'_blank'} href="https://www.postman.com/" className="tooltip">
                        <img className="icon thumbails" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" alt="Postman" />
                        <span className="tooltiptext">Postman</span>
                    </a>
                    <a target={'_blank'} href="https://bubble.io/" className="tooltip">
                        <img className="icon thumbails" src="https://i.ibb.co/NYp3kSN/Imagen2.png" alt="Bubble" />
                        <span className="tooltiptext">Bubble</span>
                    </a>

                </div>
            </Container>
        </div>
    )
}

export default Skills