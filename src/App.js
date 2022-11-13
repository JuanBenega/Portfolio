
import './styles/App.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <div className='appFooter'><Footer /></div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
