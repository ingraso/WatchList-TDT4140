import React from "react";
import { Link } from "react-router-dom";
import "./aside.css";

class Aside extends React.Component {
  constructor(username) {
    super(username);
    this.state = {
      uName: username
    };
  }
  render() {
    return (
      <div className="aside">
        <h4>{this.state.uName}</h4>
        <li>
          <Link to="/addMovies">Add movies and series</Link>
        </li>
        <li>
          <Link to="/exploreUsers">Explore other users</Link>
        </li>
        <li>
          <Link to="/exploreUsers">Explore other users</Link>
        </li>
        <li>
          <Link to="/exploreUsers">Explore other users</Link>
        </li>
        <li>
          <Link to="/exploreUsers">Explore other users</Link>
        </li>
        <li>
          <Link to="/exploreUsers">Explore other users</Link>
        </li>
        <li>
          <Link to="/exploreUsers">Explore other users</Link>
        </li>
        <li>
          <Link to="/exploreUsers">Explore other users</Link>
        </li>
        <li>
          <Link to="/exploreUsers">Explore other users</Link>
        </li>
        <li>
          <Link to="/exploreUsers">Explore other users</Link>
        </li>
      </div>
    );
  }
}

export default Aside;
