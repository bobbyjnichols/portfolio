import './Navigation.sass';
import React, { Component, Fragment } from "react";
import {NavLink, withRouter} from "react-router-dom";

class Navigation extends Component {
  render() {
    return <Fragment>
        <ul className={`${this.props.type}-navigation Navigation`}>
          {this.props.routes.map((route, i) =>
            <NavLink to={route.path} key={i}>
              <li>{route.name}</li>
            </NavLink>
          )}
        </ul>
    </Fragment>;
  }
}

export default withRouter(Navigation);