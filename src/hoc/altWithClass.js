import React, { Component } from 'react';

// stateless component

// const altWithClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//     {/* {...props} just passes on the props as it received them*/}
//       <WrappedComponent {...props}/>
//     </div>
//   )
// }

// stateful component

const altWithClass = (WrappedComponent, className) => {
  return class extends Component {
    render () {
      return (
        <div className={className}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

export default altWithClass;