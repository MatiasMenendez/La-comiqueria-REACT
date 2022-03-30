import logo from './multimedia/imagen/logo.jpeg';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return <nav className="navbar navbar-expand-lg navbar-light menuNavegable">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><img src={logo} width="71%" height="122" alt=""
          /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/manga">MANGA</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categoria/merchandising">MERCHANDISING</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="categoria/comics">COMICS</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">CONTACTO</Link>
          </li>
          <CartWidget />
        </ul>
      </div>
    </div>
  </nav>
}

export default Navbar;