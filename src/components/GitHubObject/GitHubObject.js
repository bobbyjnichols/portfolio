import React, { Component } from "react";
import LanguageChip from "../LanguageChip/LanguageChip";
import TimeSince from "../TimeSince/TimeSince";
import "./GitHubObject.sass"

class GitHubObject extends Component {
  render() {
    return (
      <div className="Repository">
        <a href={this.props.url}>
          <h4>{this.props.name}</h4>
        </a>
        <p>{this.props.description}</p>
        <div className="meta">
          <LanguageChip language={this.props.language}/>
          {this.props.date && <TimeSince date={this.props.date}/>}
        </div>
      </div>
    );
  }
}

export default GitHubObject;