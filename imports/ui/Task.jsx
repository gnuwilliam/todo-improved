import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';

export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

Task.propTypes = {
  // Use props to indicate task is required
  task: PropTypes.object.isRequired
};