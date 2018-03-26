import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render () {
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