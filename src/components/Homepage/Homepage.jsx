import React from "react";
import Navbar from "../Navbar";
import Home from "../Home";
import About from "../About";
import Events from "../Events";
import Socials from "../Socials";
import Footer from "../Footer";

const Homepage = () =>{
    return(
        <>
    <Navbar/>
    <Home/>
    <About/>
    <Events/>
    <Socials/>
    <Footer/>
    </>
    )
}

export default Homepage;