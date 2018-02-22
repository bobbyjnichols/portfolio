import React, { Component, Fragment } from "react";
import Repository from '../../../components/Repository/Repostiory'
import "./GitHub_Repos.sass"

class GitHub_Repos extends Component {
  render() {
    return (
      <div className="GitHub_Repos">
        <h1>GitHub Repositories</h1>
        <ul>
          {this.props.repos !== null && this.props.repos.map((repo,i) =>
            <li key={i}>
              <Repository repository={repo}/>
            </li>)}
        </ul>
      </div>
    );
  }
}

export default GitHub_Repos;