
import './styles/App.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import ModeProvider from './context/ModeContext';
import Projects from './components/Projects';



function App() {

  return (
    <ModeProvider>
      <BrowserRouter>
        <div className='App'>
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
