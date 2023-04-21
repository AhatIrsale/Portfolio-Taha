import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  { Header } from './Components/Header'
import  { Footer } from './Components/Footer'
import  {Home} from './Components/Home'
import {About} from './Components/About'
import {Exp} from './Components/exp'
import {Cer} from './Components/Certificat'
import {Pr} from './Components/Projets'
import Contact from './Components/Contact'

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      
      <div className="main-wrapper">
        <Routes>
        <Route path="/" element={<Home />} /> 
         <Route path="/home" element={<Home />} /> 
         <Route path="/about" element={<About />} /> 
         <Route path="/exp" element={<Exp />} /> 
         <Route path="/cer" element={<Cer />} /> 
         <Route path="/pr" element={<Pr />} /> 
         <Route path="/ct" element={<Contact />} /> 
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
