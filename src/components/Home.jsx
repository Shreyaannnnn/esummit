import React from 'react';
import video from '../assets/video3.webm'
import './Home.css'
import esummit from '../assets/esummit.png'


const Home = () => {
  return (
    <section id='home'  className="container">
       <video autoPlay loop muted>
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>

        <div className="home_content">
          {/* <h2>Discover Unforgettable Events Near You!</h2> */}
          <img src={esummit} alt="" />

          <button><a href="/">Register Now</a></button>
        </div>

    </section>
  );
};

export default Home;
