import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Jock', age: 32 },
      { name: 'Nele', age: 33 },
      { name: 'Leon', age: 0 },
      { name: 'Alfie', age: 1 },
    ]
  }

  switchAlfiesNameHandler = (newName) => {
    this.setState({
      persons: [
        ...this.state.persons.slice(0, 3),
        { name: newName , age: 1 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    // Make a copy
    const persons = [...this.state.persons];
    // Change the copy
    persons[+event.target.name].name = event.target.value;
    // Overwrite original with updated copy
    this.setState({
      persons
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.persons.map((el, i) => {
            return <Person name={el.name}
                      age={el.age}
                      key={i}
                      index={i}
                      nameChangedHandler={this.nameChangedHandler} />
          })
        }
        {/* Two ways to dynamically pass values to event handlers:
          1. Assigning an anonymous arrow funtion to the click event which will
            handle the call of the handler method when executed.
          2. Using the bind method as below. This is the preferred, more efficient method.
        */}
        <button onClick={this.switchAlfiesNameHandler.bind(this, 'super dooper Alfie')}>Switch name</button>
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
