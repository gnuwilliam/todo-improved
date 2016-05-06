import React from 'react';
import { Component } from 'react';
import { PropTypes } from 'react';
import { Tasks } from '../api/tasks.js';

export default class Task extends Component {
  toggleChecked () {
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked }
    });
  }

  deleteTask () {
    Tasks.remove(this.props.task._id);
  }

  render () {
    const taskClassName = this.props.task.checked ? 'checked' : '';
    return (
      <li className={taskClassName}
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}>
        <span>{this.props.task.text}</span>
        <button className="delete" onClick={this.deleteTask.bind(this)}>
          &times;
        </button>
      </li>
    );
  }
}

Task.propTypes = {
  // Use props to indicate task is required
  task: PropTypes.object.isRequired
};