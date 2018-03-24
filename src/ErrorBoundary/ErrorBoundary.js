import React, { Component } from 'react';

/*

If we simulate throwing an error as we have in Person.js, in dev mode we will still get
a breaking error but in production, the app will gracefully handle the error and display
the error message inside the dom.

*/

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>{this.state.errorMessage}</h1>
      )
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;