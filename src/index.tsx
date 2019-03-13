import React from 'react';
import ReactDOM from 'react-dom';
import flowRight from 'lodash/flowRight';
import App from './App';
import './index.css';
import withWindowResize from './high-order/withWindowResize';
import * as serviceWorker from './serviceWorker';

const ComposedApp = flowRight([withWindowResize])(App);

ReactDOM.render(<ComposedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();