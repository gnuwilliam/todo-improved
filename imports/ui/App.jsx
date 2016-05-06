import React from 'react';
import { Component } from 'react';

import Task from './Task.jsx';

// App Component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'Build React App' },
      { _id: 2, text: 'Test React App' },
      { _id: 3, text: 'Deploy React App' }
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  render() {
    return (
      <div className="app">
        <header>
          <h1><span>todo</span>list</h1>
          <small>get things <strike>done</strike></small>
        </header>

        <div className="container">
          <ul>
            {this.renderTasks()}
          </ul>
        </div>

        <footer>
          <small>
            made with <span>♥</span> by &nbsp;
            <a href="https://github.com/gnuwilliam">@gnuwilliam</a>
          </small>
        </footer>
      </div>
    );
  }
}