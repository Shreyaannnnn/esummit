import React from 'react'
import './Events.css'
// import event1 from '../assets/event-1.png'
import event2 from '../assets/event-2.png'
import event3 from '../assets/event-3.png'
import event4 from '../assets/event-4.png'
import event5 from '../assets/event-5.png'
import event6 from '../assets/event-6.png'

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

const Events = () => {
  return (
    <section id='events' className='events'>
        <div className="events_container">
            <h2>Our Events</h2>
            <div className="events_cards">
                {/* <div className="event_card">
                    <img src={event1} alt="event 1" />
                </div> */}
                <div className="event_card" data-aos="flip-left">
                    <img src={event2} alt="event 2" />
                </div>
                <div className="event_card" data-aos="flip-right">
                    <img src={event3} alt="event 3"  />
                </div>
                <div className="event_card"  data-aos="flip-left" >
                    <img src={event4} alt="event 4"/>
                </div>
                <div className="event_card" data-aos="flip-right" >
                    <img src={event5} alt="event 5" />
                </div>
                <div className="event_card" data-aos="flip-left" >
                    <img src={event6} alt="event 6" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Events
