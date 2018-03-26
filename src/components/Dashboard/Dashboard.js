import React from 'react';
import classes from './Dashboard.css';

const Dashboard = (props) => {

  const assignedClasses = [];
  let btnClass = '';

  if (props.showPerson) {
    btnClass = classes.red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // assignedClasses = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // assignedClasses = ['red', 'bold']
  }

  return (
    <div className={classes.Dashboard}>
      <p className={assignedClasses.join(' ')}>{props.appTitle}</p>
      <button className={btnClass}
        onClick={props.clicked}>
        {props.showPerson ? 'Hide Persons' : 'Show Persons'}
      </button>
    </div>
  )
}

export default Dashboard;