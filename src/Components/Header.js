import React from "react";


function Header() {
    return (
        <div className="container-fluid shadow-lg p-2 mb-3 bg-dark rounded sticky-top" id="Home">
            <div className="row align-items-center">
                <header className="jumbotron col">
                    <div className="text-white">
                        <h1 className="display-4 pb-1">
                            Eric Hill | 
                            <small className="text-muted"> Software Engineer </small>
                            
                        </h1>
                    </div>
                </header>
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
};

export default Header;