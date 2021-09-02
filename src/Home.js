import React from "react";
import AboutMe from "./Components/AboutMe";
import Introduction from "./Components/Introduction";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";


function Home() {
    return (
        <>
        <Header />
        <Introduction />                
        <AboutMe />
        <Portfolio />        
        <Contact />
        <Footer />
        </>
    );
};

export default Home;