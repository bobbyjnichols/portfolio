import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import GitHub_Home from "./Home/GitHub_Home";
import GitHub_Repos from "./Repos/GitHub_Repos";
import GitHub_Gists from "./Gists/GitHub_Gists";
import "./GitHub.sass"

class GitHub extends Component {
  constructor() {
    super();
    window.document.title = "Robert Nichols - GitHub";
    this.username = "bobbyjnichols";
    this.api = "https://api.github.com";
    this.state = {user:null, repos:null};
  }

  componentDidMount() {
    fetch(`${this.api}/users/${this.username}`).then(response => {
      response.json().then(user => {
        this.setState({user});
      });
    });
    fetch(`${this.api}/users/${this.username}/repos`).then(response => {
      response.json().then(repos => {
        this.setState({repos});
        console.log(this.state.repos);
      });
    });
  }

  render() {
    return (
      <div className={"GitHub"}>
        <Navigation type="sub" routes={[{
            name: "Overview",
            path: "/github"
          },{
            name: "Repositories",
            path: "/github/repos"
          },{
            name: "Gists",
            path: "/github/gists"
          }]
        }/>
        <Route exact path="/github" render={()=><GitHub_Home user={this.state.user}/>}/>
        <Route exact path="/github/repos" render={()=><GitHub_Repos repos={this.state.repos}/>}/>
        <Route exact path="/github/gists" render={()=><GitHub_Gists api={this.api} user={this.username}/>}/>
      </div>
    );
  }
}

export default GitHub;