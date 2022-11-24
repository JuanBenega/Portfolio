
import './styles/App.scss'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const [mode, setMode] = useState(localStorage.getItem("theme") || "dark");

  const switchMode = () => {
    switch (mode) {
      case "light":
        setMode("dark");
        break;
      case "dark":
        setMode("light");
        break;
      default:
        break;
    }

  }

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode])


  return (
    <BrowserRouter>
      <div className={mode === "dark" ? "App dark" : "App light"}>
        <Header switchMode={switchMode} mode={mode} />
        <Routes>
          <Route path='/' element={<Home mode={mode} />} />
          <Route path='/about' element={<About mode={mode} />} />
          <Route path='/skills' element={<Skills mode={mode} />} />
          <Route path='/projects' element={<Projects mode={mode} />} />
        </Routes>
        <Footer mode={mode} />
      </div>
    </BrowserRouter>
  );
}

export default App;
