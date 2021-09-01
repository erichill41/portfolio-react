import React from "react";
import NavBar from "./NavBar";


function Header() {
    return (
        <div className="container-fluid shadow-lg p-3 mb-3 bg-dark rounded">
            <header className="jumbotron">
                <div className="container text-white">
                    <h1 className="display-4 pb-2"> Eric Hill | <small className="text-muted"> Software Engineer </small> </h1>
                </div>
            </header>
            
            <NavBar />
            
        </div>
    );
};

export default Header;