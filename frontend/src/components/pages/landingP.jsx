import React, { Component } from "react";


class landingp extends Component {
  constructor(props) {
    super(props);
  }

    
  render() {

    return (

        <div> 

        <div className="app-container">
        
        <div className="nav">

        <div className="nav-left">
          <input
            className="nav-search-input"
            placeholder="Search"
          />
          <button className="nav-search-button">Search</button>
        </div>

        <div className="nav-center"> 
            <div className="nav-logo"><h2> WatchList</h2></div>
              </div>

        <div className="nav-right">
          <div className="nav-button">Sign up</div>
          <div className="nav-button">Log in</div>
        </div>

    </div>


      <div className="movies">

        <div className="movies-right"> <h5>This weeks: </h5></div>

      </div>   
      
        </div>


        <div>


        </div>
        </div>
        


      

    );
  }



}

export default landingp;
