import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props)
    console.log('[Persons.js] Inside of constructor', props)
  }

  componentWillMount() {
    console.log('[Persons.js] componentWillMount')
  }

  componentDidMount() {
    console.log('[Persons.js] componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    // if return true, update continues
    // if return false, update will be cancelled
    return nextProps.persons !== this.props.persons;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('[UPDATE Persons.js] Inside componentDidUpdate');
  }

  render () {
    console.log('[Persons.js] componentDidMount')
    return this.props.persons.map((person, i) => {
      return <Person
        name={person.name}
        age={person.age}
        index={i}
        key={i}
        deletePersonHandler={this.props.clicked.bind(this, i)}
        nameChangedHandler={(event) => this.props.changed(event, person.id)} />
      })
  }
};

export default Persons;