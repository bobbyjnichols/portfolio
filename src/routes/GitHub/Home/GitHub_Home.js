import React, { Component } from "react";

class GitHub_Home extends Component {
  constructor() {
    super();
    window.document.title = "Robert Nichols - GitHub"
  }

  componentWillReceiveProps(props) {
    console.log(props);
  }

  render() {
    return (
      <div>
        <h2>GitHub Repos</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.</p>
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        {this.props.repos == null && <h1>Loading</h1>}
      </div>
    );
  }
}

export default GitHub_Home;