import React from "react";
import NavBar from "./NavBar";

function Footer() {
    return (
        <div className="container-fluid rounded bg-dark sticky-bottom">
            <div className="row p-2 align-items-center">
                <p className="text-white col-9"> Created by Eric </p>
                <div className="col-auto"> 
                    <NavBar />
                </div>    
            </div> 
            
        </div>
       
    );
}

export default Footer;