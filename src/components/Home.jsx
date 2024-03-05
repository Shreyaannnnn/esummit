import React from 'react';
import video from '../assets/video3.mov'


const Home = () => {
  return (
    <div  className="container">
        <video src={video}  autoPlay loop muted/>


    </div>
  );
};

export default Home;
