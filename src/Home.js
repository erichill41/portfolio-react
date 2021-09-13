import React from "react";
import { Route, Switch } from "react-router-dom";
import Introduction from "./Components/Introduction";
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
                <Introduction />            
            </Route>
            <Route exact path="/Portfolio">
                <Portfolio />
            </Route>
            <Route exact path="/Contact">
                <Contact />
            </Route>
        </Switch>
        <Footer />
        </>
    );
};

export default Home;