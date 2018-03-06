import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
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
    this.state = {repos:null};
  }

  render() {
    return (
      <div className={"GitHub"}>
        <Navigation type="sub" routes={[{
            name: "Overview",
            path: "/github/overview"
          },{
            name: "Repositories",
            path: "/github/repos"
          },{
            name: "Gists",
            path: "/github/gists"
          }]
        }/>
        <Route exact path="/github" render={()=><Redirect to="/github/overview"/>}/>
        <Route exact path="/github/overview" render={()=><GitHub_Home api={this.api} user={this.username}/>}/>
        <Route exact path="/github/repos" render={()=><GitHub_Repos api={this.api} user={this.username}/>}/>
        <Route exact path="/github/gists" render={()=><GitHub_Gists api={this.api} user={this.username}/>}/>
      </div>
    );
  }
}

export default GitHub;