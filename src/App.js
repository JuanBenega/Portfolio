
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

  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");
  console.log(mode);
  let changeMode = 0;

  const switchMode = () => {
    //console.log(themeMode);
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
    //     localStorage.setItem("theme", mode);
    //     console.log(themeMode);

  }

  // useEffect(() => {
  //   themeMode = localStorage.getItem("theme");

  // }, [themeMode])


  return (
    <BrowserRouter>
      <div className={mode === "dark" ? "App dark" : "App light"}>
        <Header switchMode={switchMode} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
