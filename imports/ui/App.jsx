import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import { PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';

class App extends Component {
  handleSubmit (event) {
    event.preventDefault();

    // find text input, get value and trim it
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    // insert Task into the database
    Tasks.insert({
      text,
      createdAt: new Date()
    });

    // clear input value
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  getTasks () {
    return [
      { _id: 1, text: 'Build React App' },
      { _id: 2, text: 'Test React App' },
      { _id: 3, text: 'Deploy React App' }
    ];
  }

  renderTasks () {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render () {
    return (
      <div className="app">
        <header>
          <h1><span>todo</span>list</h1>
          <small>get things <strike>done</strike></small>
        </header>

        <div className="container">
          <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
            <input type="text" ref="textInput" placeholder="Type to add new task <Enter>" required/>
          </form>
          <h3>Task List</h3>
          <ul>
            {this.renderTasks()}
          </ul>
        </div>

        <footer>
          <small>
            made with <span>♥</span> by <a href="https://github.com/gnuwilliam">@gnuwilliam</a>
          </small>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired
}

export default createContainer(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch({})
  };
}, App);