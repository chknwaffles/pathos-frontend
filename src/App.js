import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer';
import MessageContainer from './containers/MessageContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/'>
            <MainContainer />
          </Route>
          <Route className='/chat'>
            <MessageContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
