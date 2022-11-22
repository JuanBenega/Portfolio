
import './styles/App.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import ModeProvider from './context/ModeContext';
import Projects from './components/Projects';
import MetaTags from 'react-meta-tags';


function App() {

  return (
    <ModeProvider>
      <BrowserRouter>
        <div className='App'>
          <MetaTags>
            <meta name='og:type' content="Web site" />
            <meta name='og:title' content="Juan Benega Portfolio" />
            <meta name='og:url' content="https://www,jbenega.vercel.app" />
            <meta name='og:image' content="https://i.ibb.co/JkdD4Lq/fondo.gif" />
            <meta name='og:description' content="Portfolio profesional de Desarrollo Web creado con React JS" />
          </MetaTags>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ModeProvider>
  );
}

export default App;
