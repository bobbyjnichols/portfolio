import React, { Component } from "react";
import GitHubObject from '../../../components/GitHubObject/GitHubObject'
import "./GitHub_Repos.sass"

class GitHub_Repos extends Component {
  constructor() {
    super();
    this.state = {repos:null};
  }

  componentDidMount() {
    fetch(`${this.props.api}/users/${this.props.user}/repos`).then(response => {
      response.json().then(repos => {
        this.setState({repos});
      });
    });
  }

  render() {
    return (
      <div className="GitHub_Repos">
        <ul>
          {this.state.repos !== null && this.state.repos.map((repo,i) =>
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