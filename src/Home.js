import React from "react";
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
        <Portfolio />
        <Contact />
        <Footer className="fixed-bottom"/>
        </>
    );
};

export default Home;