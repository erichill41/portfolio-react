import React from "react";

function NavBar() {
  return (
    <div className="btn-toolbar" role="toolbar">
        <div className="btn-group">
            <a href="#Home">
                <button type="button" className="btn btn-outline-light">
                    Home
                </button>
            </a>
            <a href="#About-Me">
                <button type="button" className="btn btn-outline-light">
                    About Me
                </button>
            </a>
            <a href="#Portfolio">
                <button type="button" className="btn btn-outline-light">
                    Portfolio
                </button>
            </a>
            <a href="/contact">
                <button type="button" className="btn btn-outline-light">
                    Contact
                </button>
            </a>
        </div>
    </div>
  );
}

export default NavBar;