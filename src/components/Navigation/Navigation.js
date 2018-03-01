import './Navigation.sass';
import React, { Component, Fragment } from "react";
import {NavLink, withRouter} from "react-router-dom";

class Navigation extends Component {
  render() {
    return <Fragment>
        <ul className={`${this.props.type}-navigation Navigation`}>
          {this.props.routes.map((route, i) =>
            <li key={i} className={this.props.location.pathname === route.path ? "active" : ""}>
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          )}
        </ul>
    </Fragment>;
  }
}

export default withRouter(Navigation);