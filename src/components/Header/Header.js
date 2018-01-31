import React, { Component } from "react";
import './Header.sass'
import Navigation from "../Navigation/Navigation";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {isHome: props.location.pathname === '/'};
  }

  componentWillReceiveProps(props) {
    this.setState({isHome: props.location.pathname === '/'});
  }

  render() {
    return (
      <div className={this.state.isHome ? 'header large':'header'}>
        {!this.state.isHome && <Navigation type="header"/>}
      </div>
    );
  }
}

export default Header;