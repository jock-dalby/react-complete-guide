import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Jock', age: 32 },
      { id: 2, name: 'Nele', age: 33 },
      { id: 3, name: 'Leon', age: 0 },
      { id: 4, name: 'Alfie', age: 1 },
    ],
    showPerson: false
  }

  switchAlfiesNameHandler = (newName) => {
    this.setState({
      persons: [
        ...this.state.persons.slice(0, 3),
        { name: newName, age: 1 }
      ]
    });
  }

  deletePersonHandler = (index) => {
    this.setState({
      persons: [
        ...this.state.persons.slice(0, index),
        ...this.state.persons.slice(index + 1)
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    // Make a copy
    const persons = [ ...this.state.persons ];
    // Change the copy
    persons[ personIndex ].name = event.target.value;
    // Overwrite original with updated copy
    this.setState({
      persons
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

  render() {

    // All values must be wrapped in quotation marks because this is JS code and therefore
    // must use strings.
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null

    if (this.state.showPerson) {
      style.backgroundColor = 'red';
      persons = (
        <div>
          {
            this.state.persons.map((person, i) => {
              return <Person name={person.name}
                age={person.age}
                key={person.id}
                index={i}
                deletePersonHandler={this.deletePersonHandler.bind(this, i)}
                nameChangedHandler={event => this.nameChangedHandler(event, person.id)} />
            })
          }
        </div>
      )
    } else {
      persons = null;
    };

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <p className={classes.join(' ')}>Dalby Family Massive (NZ)</p>
        <button
          onClick={this.switchAlfiesNameHandler.bind(this, 'super dooper Alfie')}>Switch name</button>
        <button style={style}
          onClick={this.togglePersonsHandler}>
          {this.state.showPerson ? 'Hide Persons' : 'Show Persons'}
        </button>
        {persons}
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
