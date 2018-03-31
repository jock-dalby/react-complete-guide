import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../../components/Persons/Persons';
import Dashboard from '../../components/Dashboard/Dashboard';

import Aux from '../../hoc/Aux';
import altWithClass from '../../hoc/altWithClass';

class App extends PureComponent {

  constructor(props) {
    super(props)
    console.log('[App.js] Inside of constructor', props)
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  state = {
    persons: [
      { id: 1, name: 'Jock', age: 32 },
      { id: 2, name: 'Nele', age: 33 },
      { id: 3, name: 'Leon', age: 0 },
      { id: 4, name: 'Alfie', age: 1 },
    ],
    showPerson: false,
    toggleClicked: 0
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
    /* This is the correct way to setState if using the prevState to set new value.
      This is because if there is async code running, the state value may change while
      setState method is being exececuted. Using below syntax ensures you get the previous state throughout.
    */
    this.setState((prevState, props) => {
      return {
        showPerson: !prevState.showPerson,
        toggleClicked: prevState.toggleClicked + 1
      }
    })
  }

  render() {
    console.log('[App.js] render method')

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            persons={this.state.persons}
          ></Persons>
        </div>
      )
    } else {
      persons = null;
    };

    return (
      <Aux>
        <button onClick={() => this.setState({showPerson: true})}>Show persons</button>
        <Dashboard
          appTitle={this.props.title}
          persons={this.state.persons}
          showPerson={this.state.showPerson}
          clicked={this.togglePersonsHandler}
          ></Dashboard>
        {persons}
      </Aux>
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
export default altWithClass(App, classes.App);
