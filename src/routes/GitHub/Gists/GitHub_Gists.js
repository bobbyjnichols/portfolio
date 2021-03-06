import React, { Component } from "react";
import GitHubObject from "../../../components/GitHubObject/GitHubObject";
import "./GitHub_Gists.sass";

class GitHub_Gists extends Component {
  constructor() {
    super();
    this.state = {gists:null};
    this.identifyMainFile = this.identifyMainFile.bind(this);
  }

  componentDidMount() {
    fetch(`${this.props.api}/users/${this.props.user}/gists`).then(response => {
      response.json().then(gists => {
        this.setState({gists});
      });
    });
  }

  identifyMainFile(files) {
    const keys = Object.keys(files);
    let mainFile = Object.assign(files[keys[0]], {name:keys[0]});
    keys.forEach(key => {
      if (files[key].size > mainFile.size)
        mainFile = Object.assign(files[key], {name:key});
    });
    return mainFile;
  }

  render() {
    return (
      <div className="GitHub_Gists">
        <ul>
          {this.state.gists !== null && this.state.gists.map((gist,i) => {
            let mainFile = this.identifyMainFile(gist.files);
            return (
              <li key={i}>
                <GitHubObject name={mainFile.name}
                              description={gist.description}
                              url={gist.html_url}
                              language={mainFile.language}
                              date={gist.updated_at}/>
              </li>)
          })}
        </ul>
      </div>
    );
  }
}

export default GitHub_Gists;