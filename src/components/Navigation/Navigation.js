import './Navigation.sass';
import React, { Component } from "react";
import {NavLink, HashRouter} from "react-router-dom";

class Navigation extends Component {
  render() {
    return <div className='Navigation'>
      <HashRouter>
        <ul className={`${this.props.type}-navigation`}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/github">GitHub</NavLink></li>
        </ul>
      </HashRouter>
    </div>;
  }
}

export default Navigation;