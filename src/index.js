import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Dalby Family Massive (NZ)"/>, document.getElementById('root'));
registerServiceWorker();
