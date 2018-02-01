import React, { Component } from "react";
import './Logo.sass'

class Logo extends Component {
  constructor() {
    super();
    this.text = "Robert Nichols"
  }

  render() {
    return <h1 className='Logo'>
      {this.text.split('').map((character, i) => <span key={i}>{character}</span>)}
    </h1>;
  }
}

export default Logo;