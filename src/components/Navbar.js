import logo from './multimedia/imagen/logo.jpeg';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from './CartWidget'

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg navbar-light menuNavegable">
    <div className="container-fluid">
      <a className="navbar-brand" href="index.html"><img src={logo} width="71%" height="122" alt=""
          /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="manga.html">MANGA</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="merchandising.html">MERCHANDISING</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="cómics.html">COMICS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto">CONTACTO</a>
          </li>
          <CartWidget />
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar;