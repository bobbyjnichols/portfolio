import React, { Component, Fragment } from "react";
import moment from "moment";

class FormattedDate extends Component {

  constructor() {
    super();
    this.state = {date:null}
  }

  componentWillMount() {
    let date = new Date(this.props.date);
    this.setState({date: moment(date).fromNow()});
  }

  render() {
    return <Fragment>{this.state.date}</Fragment>
  }
}
export default FormattedDate