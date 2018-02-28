import React, { PureComponent } from "react";
import "./Heading.sass"

class Heading extends PureComponent {
  render() {
    return (
      <h1 className="Heading">{this.props.children}</h1>
    )
  }
}

export default Heading;