import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="btn-toolbar" role="toolbar">
        <div className="btn-group">
            <Link to="/">
                <button type="button" className="btn btn-outline-light">
                    Home
                </button>
            </Link>
            <Link to="/Portfolio">
                <button type="button" className="btn btn-outline-light">
                    Portfolio
                </button>
            </Link>
            <Link to="/contact">
                <button type="button" className="btn btn-outline-light">
                    Contact
                </button>
            </Link>
        </div>
    </div>
  );
}

export default NavBar;