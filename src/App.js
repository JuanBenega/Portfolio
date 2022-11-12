
import './styles/App.scss'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path='/' element={} /> */}
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
