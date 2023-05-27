import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Pagedata from './components/Pagedata';
import {BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/">
            <Pagedata name="Home" />
            </Route>

            <Route path="/about">
              <Pagedata name="About" />
            </Route>

            <Route path="/services">
              <Pagedata name="Services" />
            </Route>

            <Route path="/contact">
              <Pagedata name="Contact" />
            </Route>
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </>
  );
}

export default App;
