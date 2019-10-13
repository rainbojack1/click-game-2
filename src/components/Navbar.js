import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
  state = {
    correct: ""
  };


  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="mb-0 h1">Tricky Clicky</div>
          <div className="response">            
            <span>{this.props.correct}</span>
          </div>
          <div className="score">
            <span>Score: {this.props.score} | </span>
            <span>Top Score: {this.props.topScore}</span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
