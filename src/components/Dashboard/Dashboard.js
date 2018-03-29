import React from 'react';
import classes from './Dashboard.css';
import Aux from '../../hoc/Aux';

const Dashboard = (props) => {

  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPerson) {
    btnClass = [btnClass, classes.red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // assignedClasses = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return (
    <Aux>
      <p className={assignedClasses.join(' ')}>{props.appTitle}</p>
      <button className={btnClass}
        onClick={props.clicked}>
        {props.showPerson ? 'Hide Persons' : 'Show Persons'}
      </button>
    </Aux>
  )
}

export default Dashboard;