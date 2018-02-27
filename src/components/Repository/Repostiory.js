import React, { Component } from "react";
import LanguageChip from "../LanguageChip/LanguageChip";
import TimeSince from "../TimeSince/TimeSince";
import "./Repository.sass"

class Repository extends Component {
  render() {
    return (
      <div className="Repository">
        <a href={this.props.repository.html_url}>
          <h4>{this.props.repository.name}</h4>
        </a>
        <p>{this.props.repository.description}</p>
        <div className="meta">
          <LanguageChip language={this.props.repository.language}/>
          <TimeSince date={this.props.repository.pushed_at}/>
        </div>
      </div>
    );
  }
}

export default Repository;