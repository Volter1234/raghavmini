import React from "react";
import logo from "./bhcglogowhite.png";

function Nav(){
    return(
      <section className="Navigation">
        <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={logo} alt="" width="120" height="100"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#cards">Team</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/consulting">Consulting</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link one" aria-current="page" href="/">Contact Us</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</section>
    )
}

export default Nav;