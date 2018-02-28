import React, { Component, Fragment } from "react";
import Heading from "../../../components/Heading/Heading";
import GitHubObject from '../../../components/GitHubObject/GitHubObject'
import "./GitHub_Repos.sass"

class GitHub_Repos extends Component {
  render() {
    return (
      <div className="GitHub_Repos">
        <Heading>GitHub Repositories</Heading>
        <ul>
          {this.props.repos !== null && this.props.repos.map((repo,i) =>
            <li key={i}>
              <GitHubObject name={repo.name}
                            url={repo.html_url}
                            description={repo.description}
                            language={repo.language}
                            date={repo.pushed_at}/>
            </li>)}
        </ul>
      </div>
    );
  }
}

export default GitHub_Repos;