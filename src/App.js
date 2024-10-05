import React from 'react';

import Navbar from './components1/Navbar';
import Home from './components1/Home';
import About from './components1/About';
import Skills from './components1/Skills';
import Projects from './components1/Projects';
import Contact from './components1/Contact';

import Footer from './components1/Footer';
 

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
     
      <Footer/>
      
    </div>
  );
}

export default App;

