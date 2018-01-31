import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import "./Home.sass"

class Home extends Component {
  constructor() {
    super();
    window.document.title = "Robert Nichols"
  }

  render() {
    return (
      <div className="Home">
        <Navigation type="home"/>
      </div>
    );
  }
}

export default Home;