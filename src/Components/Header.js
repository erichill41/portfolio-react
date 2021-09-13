import React from "react";
import NavBar from "./NavBar";


function Header() {
    return (
        <div className="container-fluid shadow-lg p-2 mb-3 bg-dark rounded" id="Home">
            <div className="row align-items-center">
                <header className="jumbotron col-10">
                    <div className="text-white">
                        <h1 className="display-4 pb-1"> Eric Hill | <small className="text-muted"> Software Engineer </small> </h1>
                    </div>
                </header>
                <div className="col-auto">
                    <NavBar />
                </div>
            </div>
            
        </div>
    );
};

export default Header;