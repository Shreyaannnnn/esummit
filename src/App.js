import React from 'react';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import About from './components/About';
import Events from './components/Events';

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Events/>
    </>
  );
};

export default App;
