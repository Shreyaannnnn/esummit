import React from 'react'
import './About.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(
    {
        offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    
      }
);


const About = () => {
  return (
    <section id='about' className='about'>
        <div className="about_content">
        <h2>About Us</h2>
        <p data-aos='fade-right' >ECELL ADGIPS is a dynamic society of entrepreneurship enthusiasts who are committed to promoting creativity and problem-solving.
         We are revolutionizers and with the power of our ideas intend to bring about a positive change in the world that would make it a better place for everyone to live in.
          Constantly developing and building ourselves is our motto. 
          <br/> <br/>
           Everyone can materialize what they fantasize about, it’s just a matter of opening one’s eyes and putting in the right amount of faith and hard work.
            Our shared goal is to inspire meaningful impact and innovation, 
            creating a transformative space where technology meets empowerment.</p>
        </div>
    </section>
  )
}

export default About
