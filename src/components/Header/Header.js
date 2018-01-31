import React, { Component } from "react";
import './Header.sass'
import Navigation from "../Navigation/Navigation";

class Header extends Component {
  componentWillReceiveProps(props) {
    this.isHome = props.location.pathname === '/';
  }

  render() {
    return (
      <div className={this.isHome ? 'header large':'header'}>
        {!this.isHome && <Navigation type="header"/>}
      </div>
    );
  }
}

export default Header;