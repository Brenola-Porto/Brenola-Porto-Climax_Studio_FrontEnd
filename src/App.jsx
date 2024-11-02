import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Estudio from './pages/Estudio';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import Pacotes from './pages/Pacotes';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/studio" element={<Estudio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/" element={<Home />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path='/pacotes' element={<Pacotes/>}/>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
