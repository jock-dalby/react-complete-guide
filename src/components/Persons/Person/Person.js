import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
    constructor(props) {
        super(props)
        console.log('[Person.js] Inside of constructor', props)
      }

      componentWillMount() {
        console.log('[Person.js] componentWillMount')
      }

      componentDidMount() {
        console.log('[Person.js] componentDidMount')
      }

      render () {
        console.log('[Person.js] componentDidMount')
        return (
        <div className={classes.Person}>
            <p onClick={this.props.switchAlfiesNameHandler} >I am {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text"
                value={this.props.name}
                onChange={this.props.nameChangedHandler} />
            <button onClick={this.props.deletePersonHandler}>Delete</button>
        </div>
        )
    }
}

export default Person;