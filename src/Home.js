import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";


function Home() {
    return (
        <>
        <Header />
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route exact path="/about">
                    <AboutMe />
                </Route>
                <Route exact path="/portfolio">
                    <Portfolio />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>

        <Footer />
        </>
    );
};

export default Home;