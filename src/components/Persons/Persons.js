import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, i) => {
    return <Person
      name={person.name}
      age={person.age}
      index={i}
      key={person.id}
      deletePersonHandler={props.clicked.bind(this, i)}
      nameChangedHandler={(event) => props.changed(event, person.id)} />
  }
);

export default Persons;