import React, { Component, Fragment } from "react";
import moment from "moment";

class TimeSince extends Component {

  constructor() {
    super();
    this.state = {date:null}
  }

  componentWillMount() {
    this.setState({date: moment(this.props.date).fromNow()});
  }

  render() {
    return <Fragment>{this.state.date}</Fragment>
  }
}
export default TimeSince