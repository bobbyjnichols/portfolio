import React, { Component } from "react";
import { Route } from "react-router-dom";
import GitHub_Home from "./Home/GitHub_Home";
import GitHub_Repos from "./Repos/GitHub_Repos";
import axios from "axios";

class GitHub extends Component {
  constructor() {
    super();
    window.document.title = "Robert Nichols - GitHub";
    this.username = "bobbyjnichols";
    this.api = "https://api.github.com";
    this.state = {user:null, repos:null};
  }

  componentDidMount() {
    axios.get(`${this.api}/users/${this.username}`).then(response => {
      this.setState({user:response.data});
    });
    axios.get(`${this.api}/users/${this.username}/repos`).then(response => {
      this.setState({repos:response.data});
      console.log(this.state.repos);
    });
  }

  render() {
    return (
      <div className={"HelloWorld"}>
        <Route exact path="/github" render={()=><GitHub_Home user={this.state.user}/>}/>
        <Route exact path="/github/repos" render={()=><GitHub_Repos repos={this.state.repos}/>}/>
      </div>
    );
  }
}

export default GitHub;