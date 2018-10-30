import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { reduxBatch }  from '@manaflair/redux-batch';
import App from './App';
import canbanApp from './reducers';
import { loadState, saveState, throttle } from './helpers'
import * as serviceWorker from './serviceWorker';

// localStorage.removeItem('state');

let persistedStorage = loadState();

let store = createStore(canbanApp, persistedStorage, reduxBatch);

store.subscribe(()=>{
  throttle(saveState({
    tasks: store.getState().tasks
  }), 1000);
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
