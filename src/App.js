import React from 'react';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import About from './components/About';
import Events from './components/Events';
import Socials from  './components/Socials';
import Footer from './components/Footer';
import Ideathon from './components/Ideathon/Main'
import BattleOfBrands from './components/BattleOfBrands/BattleOfBrands';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import NFTRush from './components/NFTRush/NFTRush';

const App = () => {
  return (
    <Router>
        <Routes>
          {/* <Route path='/' component={Homepage} /> */}
          <Route path='/' element={<Homepage />} />
          {/* Define your routes inside the Switch component */}
          <Route path="/ideathon" element={<Ideathon />} />
          {/* <Route path="/traderstussle" component={TradersTussle} /> */}
          <Route path="/battleofbrands" element={<BattleOfBrands />} />
          {/* <Route path="/nftrush" component={NFTRush} /> */}
          <Route path='/nftrush' element={<NFTRush/>} />
        </Routes>
        {/* Components outside the Switch will be rendered on all pages */}

    </Router>
  );
};

export default App;
