import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <ul class="navbar-nav">
        <li>
          <a className="navbar-brand text-white">
            WatchListASMovies
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
