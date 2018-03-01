import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import './Logo.sass'

class Logo extends Component {
  constructor() {
    super();
    this.text = "Robert Nichols";
  }

  render() {
    return (
      <NavLink to="/">
        <h1 className={this.props.isReduced ? "Logo reduced" : "Logo"}>
          {this.text.split('').map(
            (c, i) => <span key={i} className={c === c.toLocaleUpperCase() && c !== ' ' ? "initial-char" : null}>{c}</span>)}
        </h1>
      </NavLink>
    );
  }
}

export default Logo;