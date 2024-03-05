import React from 'react';
import video from '../assets/video3.mov'
import './Home.css'


const Home = () => {
  return (
    <div  className="container">
       <video autoPlay loop muted>
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>

        <div className="home_content">
          <h2>Discover Unforgettable Events Near You!</h2>
          <button><a href="/">Register Now</a></button>
        </div>

    </div>
  );
};

export default Home;
