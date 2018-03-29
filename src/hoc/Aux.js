const Aux = (props) => props.children;

export default Aux;

/*
If your project uses React 16.2, you can now use a built-in "Aux" component - a so called fragment.

It's actually not called Aux  but you simply use <>  - an empty JSX tag.

So the following code

  <Aux>
      <h1>First Element</h1>
      <h1>Second Element</h1>
  </Aux>

becomes

import React, {Fragment} from 'react';

  <Fragment>
      <h1>First Element</h1>
      <h1>Second Element</h1>
  <Fragment/>
Behind the scenes, it does the same our Aux  component did.
*/