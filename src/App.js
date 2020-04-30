import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./styles/mainContainer.css";

//containers
import WelcomePageContainer from "./containers/WelcomePageContainer";
import ChatContainer from "./containers/ChatContainer";

//components
import About from "./components/navbar/About";
import ProfileContainer from "./containers/ProfileContainer";

//re did the logic in login, we need to make sure if a user puts a different path they cant bypassthe login, I think router comes with a redirect logic we can write to pass back to regular url if no user is present ...its something like see below

///https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Redirect.md
//below if u need to pass props
///https://stackoverflow.com/questions/52064303/reactjs-pass-props-with-redirect-component

function App(props) {
  const [user, setUser] = useState("");

  const handleUserInfo = (userInfo) => {
    setUser(userInfo);

    console.log(userInfo);
  }

  return (
    <Router>
      <div className="main-container">
        <Switch>
          <Route
            exact={true}
            path="/"
            render={(props) => <WelcomePageContainer {...props} user={user} handleUserInfo={handleUserInfo} />}
          />
          <Route
            path="/chat"
            render={(props) =>
              user ?
                <ChatContainer {...props} user={user} handleUserInfo={handleUserInfo} />
                :
                <Redirect to="/" />
            }
          />
          <Route
            path="/profile"
            render={(props) => <ProfileContainer {...props} user={user} handleUserInfo={handleUserInfo} />}
          />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
