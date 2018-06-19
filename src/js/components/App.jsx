import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Landing from "./layout/Landing";
import Login from "./auth/Login";
import Register from "./auth/Register";
import DashboardHome from "./dashboard/DashboardHome";
// import CreateProfile from "./createProfile/CreateProfile";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="/dashboard" component={DashboardHome} />
          <Route exact path="/dashboard/Profile" component={DashboardHome} />

          {/* <Route
            exact
            path="/dashboard/createProfile"
            component={CreateProfile}
          /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
