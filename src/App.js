import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    dogsName: 'Alfie'
  }
  render() {
    return (
      <div className="App">
        <Person name="Jock" age="32"/>
        <Person name="Nele" age="33"/>
        <Person name="Leon" age="0"/>
        <Person name={this.state.dogsName} age="1">({this.state.dogsName} is a dog!)</Person>
        <button>Switch name</button>
      </div>
    );

    /**
     * return (
     *    <div className="App">
     *      <h1>Hi, I'm a React App</h1>
     *    </div>
     * );
     *
     * UNDERSTANDING JSX
     *
     * The above JSX code is the exact equivalent of the above code and what it will get compiled
     * into by one of React's many build tools.
     * This is the reason we need to import 'React' even though we are not using it at all in the
     * JSX syntax. 'React' will get used when the JSX has been compiled.
     *
     * return React.createElement(
     *    'div', {className: 'App'}, React.createElement(
     *        'h1', null, "Hi, I'm a React App"));
     */
  }
}

export default App;
