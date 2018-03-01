import React, { Component } from "react";
import './Header.sass'
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

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
        <div className="container">
          <Logo isReduced={!this.state.isHome}/>
          {!this.state.isHome && <Navigation type="header" routes={[{
              name: "GitHub",
              path: "/github"
            },{
              name: "Stack Overflow",
              path: "/stackoverflow"
            }]
          }/>}
        </div>
      </div>
    );
  }
}

export default Header;