import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.switchAlfiesNameHandler} >I am {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text"
                value={props.name}
                onChange={props.nameChangedHandler}/>
            <button onClick={props.deletePersonHandler}>Delete</button>
        </div>
    )
}

export default person;