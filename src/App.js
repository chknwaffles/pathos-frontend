import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import MainContainer from './containers/MainContainer';
import MessageContainer from './containers/MessageContainer';
import FormContainer from './containers/FormContainer';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/'>
            <MainContainer />
          </Route>
          <Route path='/chat'>
            <MessageContainer />
          </Route>
          <Route path='/login'>
            <FormContainer form='login' />
          </Route>
          <Route path='/signup'>
            <FormContainer form='signup' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
