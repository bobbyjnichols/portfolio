import React, { Component } from "react";
import './Header.sass'
import Navigation from "../Navigation/Navigation";

class Header extends Component {
  render() {
    return <div className={'header'}>
      <Navigation type="header"/>
    </div>
  }
}

export default Header;