import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

          <a className="navbar-brand" href="#">
            <img src="assets/img/logo.png" alt="" width={100} />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">

              <li className="nav-item active">
                <Link to="/" className="nav-link">Home</Link>
              </li>

              <li className="nav-item">
                <Link to="/Movies" className="nav-link">Movies</Link>
              </li>    

            </ul>
          </div>
        </nav>
      </>
    );
  }
}
