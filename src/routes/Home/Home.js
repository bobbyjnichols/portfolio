import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";

class Home extends Component {
  constructor() {
    super();
    window.document.title = "Robert Nichols"
  }

  render() {
    return (
      <Navigation type="home"/>
    );
  }
}

export default Home;