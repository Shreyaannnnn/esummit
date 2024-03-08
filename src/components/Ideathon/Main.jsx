import React from "react";
import './Main.css';
import aboutImage from './images/About.png';
import mainImage from './images/main.png';
import faqImage from './images/Faq.png';
import contactImage from './images/Contact.png';
import eventImage from './images/Event.png';
const Main = () => {
    return (<>

        <main className="text-white-50 vh-100 text-center">
            <div id="logo">
                <h1 className="pt-5">Innøveďa</h1>
                <h6>&quot;Igniting Innovations, Celebrating Tradition&quot;</h6>
                <span className="text-dark p-1">March&nbsp;14th</span>
            </div>
            <div id="nav">
                <ul class="d-flex justify-content-around mt-3">
                    <li class="p-2">
                        <a href="#About">
                            <img src={aboutImage} alt="About" />
                            <p>About us</p>
                        </a>
                    </li>
                    <li class="p-2">
                        <a href="#Event">
                            <img src={eventImage} alt="Event" />
                            <p>Event detail</p>
                        </a>
                    </li>
                    <li class="p-2">
                        <a href="#FAQ">
                            <img src={faqImage} alt="FAQ" />
                            <p>FAQ</p>
                        </a>
                    </li>
                    <li class="p-2">
                        <a href="#Contact">
                            <img src={contactImage} alt="Contact" />
                            <p>Contact us!</p>
                        </a>
                    </li>
                </ul>
            </div>
        </main>

        <section className="text-white text-center vh-100 " id="About">
            <h2>About us</h2>
            <p className="container">
                CodeChef ADGIPS & ECELL ADGIPS are dynamic communities of tech enthusiasts and entrepreneurship enthusiasts who are committed to promoting creativity and problem solving.
                <br /><br />
                We are revolutionizers and with the power of our ideas intend to bring about a positive change in the world that would make it a better place for everyone to live in. Constantly developing and building ourselves is our motto.
                <br /><br />
                Everyone can materialize what they fantasize about, it’s just a matter of opening one’s eyes and putting in the right amount of faith and hard work. Our shared goal is to inspire meaningful impact and innovation, creating a transformative space where technology meets empowerment
            </p>
        </section>

        <section className="text-white text-center" id="Event">
            <h2>Event: Innoveda</h2>
            {/* <div id="ccXecell">
                <img src={mainImage} alt="CodeChefXEcell" />
            </div> */}
            <p className="container">
                Innoveda is a launchpad for startup minded innovators and tech enthusiasts to create disruptive solutions that address real-world problems.
            </p>
            <aside id="Theme" className="container events text-start">
                <h3>Theme's:</h3>
                <div className="container">Explore innovative solutions under various themes:</div>
                <div class="p-4 row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <img class=" healthcare"
                                src=" https://as2.ftcdn.net/v2/jpg/01/95/84/71/1000_F_195847139_kAvbJ9MZGZGHfB2ikjkWGKosSUl3OAsz.jpg"></img>
                                <h6 class="card-title text-center">Healthcare</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <img class=" healthcare" src="https://i.pinimg.com/originals/cb/bc/a5/cbbca5679a90498160bf482be4a744b7.jpg"></img>
                                <h6 class="card-title text-center ">Open Innovation</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <img class="healthcare" src="https://i.pinimg.com/736x/c1/7c/1e/c17c1e55452b5afcca8570cc315ebd8d.jpg"></img>
                                <h6 class="card-title text-center ">Sankalp for Smart Villages</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <img class="healthcare" src="https://c8.alamy.com/comp/W1JD3X/icon-set-design-sustainability-eco-friendly-green-recycle-ecology-renewable-and-solution-theme-vector-illustration-W1JD3X.jpg"></img>
                                <h6 class="card-title text-center ">Sustainable Solutions</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <img class="healthcare" src="https://s3-h2s-v2.s3.ap-south-1.amazonaws.com/2024-02-08T08%3A39%3A26.865Z-theme%20value%20chain.png"></img>
                                <h6 class="card-title text-center ">Harvesting Innovation</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <img class="healthcare" src="https://www.shutterstock.com/shutterstock/photos/535783477/display_1500/stock-photo-community-empowerment-535783477.jpg"></img>
                                <h6 class="card-title text-center ">Community Empowerment</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <img class="healthcare" src="data:image/jpeg;base64,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"></img>
                                <h6 class="card-title text-center ">Industrial Equipment Maintenance</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <img class="healthcare" src="https://www.startus-insights.com/wp-content/uploads/2018/09/FinTech-Innovation-Map-SharedImg-StartUs-Insights.png"></img>
                                <h6 class="card-title text-center ">Fintech Innovation</h6>
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                <img class="healthcare" src="https://www.greenbiz.com/sites/default/files/2021-01/CarbonFootprint.png"></img>
                                <h6 class="card-title text-center ">Carbon Footprint Tracking for Businesses</h6>
                            </div>
                        </div>
                    </div>

                </div>
            </aside>

            <aside id="Evaluation" className="container text-start mt-3 p-4">
                <h3>Evaluation Criteria:</h3>
                <div class="container-fluid">
                    <div>Participants will be evaluated on the following criteria:</div>
                    <hr />
                    <div class="p-4 row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center ">
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title text-center ">Impact</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title text-center ">Pitch</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title text-center ">Business Model</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title text-center ">Scalability</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <div class="card-body">
                                    <h6 class="card-title text-center ">Feasibility</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

        </section>


        <footer className="text-center bg-black text-white" id="Contact">
            <h4>Contact Information</h4>
            <span>Reach out to us for any inquiries or support.</span><br /><br />
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <p>Email:&nbsp;
                                <a href="mailto:ecelladgitm@gmail.com" target="_blank">ecelladgitm@gmail.com</a>
                            </p>
                        </div>
                        <div>
                            <p>Email:&nbsp;
                                <a href="mailto:codechef.adgitm@adgitmdelhi.ac.in" target="_blank">codechef.adgitm@adgitmdelhi.ac.in</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <p>Phone:&nbsp;
                                <a href="tel:9899534496" target="_blank">Khushal Vashisth: 9899534496</a>
                            </p>
                        </div>
                        <div>
                            <p>Phone:&nbsp;
                                <a href="tel:9953930377" target="_blank">Mansi Sharma: 9953930377</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </>)
};
export default Main;




