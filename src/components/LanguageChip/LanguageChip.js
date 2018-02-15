import React, { Component } from "react";
import "./LanguageChip.sass"

class LanguageChip extends Component {
  render() {
    return (
      <div className="LanguageChip">
        <div className={"color-identifier " + this.props.language.toLowerCase()}/>
        <p>{this.props.language}</p>
      </div>
    );
  }
}

export default LanguageChip;