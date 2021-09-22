import React from "react";

function Footer() {
    return (
        <div className="container-fluid rounded bg-dark fixed-bottom">
            <div className="row p-2 align-items-center">
                <p className="text-white col"> Created by Eric Hill </p>
                <div className="col-auto"> 
                    <div className="btn-toolbar" role="toolbar">
                        <div className="btn-group">
                            <a href="https://github.com/erichill41" target="blank">
                                <button type="button" className="btn btn-outline-light">
                                    GitHub
                                </button>
                            </a>
                            <a href="https://www.linkedin.com/in/erichill41/" target="blank">
                                <button type="button" className="btn btn-outline-light">
                                    LinkedIn
                                </button>
                            </a>
                        </div>
                    </div>
                </div>    
            </div> 
            
        </div>
       
    );
}

export default Footer;