import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Tricky Clicky Game</h1>
          <p className="lead">
            Click on an image to earn points, but don't click on any more than
            once!
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;