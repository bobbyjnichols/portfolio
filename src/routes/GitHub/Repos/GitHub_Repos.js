import React, { Component } from "react";
import Repository from '../../../components/Repository/Repostiory'

class GitHub_Repos extends Component {
  render() {
    return (
      <ul>
        {this.props.repos !== null && this.props.repos.map((repo,i) =>
          <li key={i}>
            <Repository repository={repo}/>
          </li>)}
      </ul>
    );
  }
}

export default GitHub_Repos;