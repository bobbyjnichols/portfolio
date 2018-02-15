import React, { Component } from "react";
import LanguageChip from "../LanguageChip/LanguageChip";
import "./Repository.sass"

class Repository extends Component {
  render() {
    return (
      <div className="Repository">
        <h4>{this.props.repository.name}</h4>
        <p>{this.props.repository.description}</p>
        <LanguageChip language={this.props.repository.language}/>
      </div>
    );
  }
}

export default Repository;