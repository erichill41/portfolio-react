import React from "react";

function NavBar() {
  return (
    <div className="navbar justify-content">
        <div>
            <a href="/">
                <button type="button" className="btn btn-outline-light">
                    Home
                </button>
            </a>
        </div>
        <div>
            <a href="/about">
                <button type="button" className="btn btn-outline-light">
                    About Me
                </button>
            </a>
        </div>
        <div>
            <a href="/portfolio">
                <button type="button" className="btn btn-outline-light">
                    Portfolio
                </button>
            </a>
        </div>
        <div>
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