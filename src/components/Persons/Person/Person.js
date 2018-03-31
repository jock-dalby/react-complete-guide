import React, { Component, Fragment } from 'react';
import classes from './Person.css';
import altWithClass from '../../../hoc/altWithClass';

import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props)
        console.log('[Person.js] Inside of constructor', props)
      }

      componentWillMount() {
        console.log('[Person.js] componentWillMount')
      }

      componentDidMount() {
        if (this.props.index === 0) {
            this.inputElem.focus();
        }
      }

      render () {
        console.log('[Person.js] componentDidMount')
        return (
        <Fragment>
            <p onClick={this.props.switchAlfiesNameHandler} >I am {this.props.name} and I am {this.props.age} years old!</p>
            <p>{this.props.children}</p>
            <input type="text"
                ref={(inputElem) => this.inputElem = inputElem}
                value={this.props.name}
                onChange={this.props.nameChangedHandler} />
            <button onClick={this.props.deletePersonHandler}>Delete</button>
        </Fragment>
        )
    }
}
/**
 * PropTpyes does not work in functional components (which we should use as much as poss.)
 *
 * Docs here ===> https://reactjs.org/docs/typechecking-with-proptypes.html
*/
Person.propTypes = {
    switchAlfiesNameHandler: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    nameChangedHandler: PropTypes.func,
    deletePersonHandler: PropTypes.func
}

export default altWithClass(Person, classes.Person);