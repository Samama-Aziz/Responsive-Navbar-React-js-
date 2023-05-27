
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Pagedata from './components/Pagedata';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<><Navbar /> <Pagedata name="Home" backgroundColor="#222" /></>} />
          <Route path="/about" element={<><Navbar /> <Pagedata name="About" backgroundColor=" #444444"/></>} />
          <Route path="/services" element={<><Navbar /> <Pagedata name="Services" backgroundColor="#556B2F"/></>} />
          <Route path="/contact" element={<><Navbar /> <Pagedata name="Contact" backgroundColor="#090979" /></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

