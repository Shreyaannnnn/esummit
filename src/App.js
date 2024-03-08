import React from 'react';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import About from './components/About';
import Events from './components/Events';
import Socials from  './components/Socials';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Events/>
    <Socials/>
    <Footer/>
    </>
  );
};

export default App;
