import React from "react";
import NavBar from "./containers/NavBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//containers
import MainContainer from "./containers/MainContainer";
import ChatContainer from "./containers/ChatContainer";
import FormContainer from "./containers/FormContainer";

//components
import About from "./components/navbar/About";
import Profile from "./components/navbar/Profile";

//re did the logic in login, we need to make sure if a user puts a different path they cant bypassthe login, I think router comes with a redirect logic we can write to pass back to regular url if no user is present ...its something like see below

///https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md
//below if u need to pass props
///https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component

//adde exact={true} to our main container ..why? otherwise it acts as a catch all and other routes would be loaded no mater what.

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={MainContainer} />
          <Route path="/chat" component={ChatContainer} />
          <Route
            path="/login"
            component={FormContainer}
            render={(porps) => <FormContainer {...props} />}
          />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
