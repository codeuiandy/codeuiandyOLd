import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar'
import HeroSection from './components/hero/hero'
import About from './components/about/about'
import "animate.css/animate.min.css";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <HeroSection/>
     <About/>
    </div>
  );
}

export default App;
