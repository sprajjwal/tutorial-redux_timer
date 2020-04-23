import React, { Component } from 'react';
import './App.css'

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';

import NewTimer from './components/new-timer';
import ListTimers from './components/list-timers';

const store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            Tmrz
          </p>
          <NewTimer/>
          <ListTimers/>
        </div>
      </Provider>
    );
  }
}

export default App;
