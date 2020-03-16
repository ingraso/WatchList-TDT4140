import React from "react";
import { Link } from "react-router-dom";
import "./aside.css";

class Aside extends React.Component {
  constructor() {
    super();
    this.state = {
      uName: "<Username>"
    };
  }
  render() {
    return (
      <div className="aside">
        <img src="" alt="Profile pic"></img>
        <h5>{this.state.uName}</h5>

        <span>
          <Link to="/addMovies">Add movies and series</Link>
        </span>
        <br></br>
        <span>
          <Link to="/exploreUsers">Explore other users</Link>
        </span>
      </div>
    );
  }
}

export default Aside;
