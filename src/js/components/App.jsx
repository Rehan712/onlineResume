import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Landing from "./layout/Landing";
import Login from "./auth/Login";
import Register from "./auth/Register";
import DashboardHome from "./dashboard/DashboardHome";
import Profiles from "./profiles/Profiles";
import Profile from "./profile/Profile";
import Posts from "./posts/Posts";
import Post from "./post/Post";
import CreateProfile from "./createProfile/CreateProfile";
import AddEducation from "./addCredentials/AddEducation";
import AddExperience from "./addCredentials/AddExperience";
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
          <Route path="/allProfiles" component={Profiles} />
          <Route path="/profile/:handle" component={Profile} />
          <Route path="/feed" component={Posts} />
          <Route path="/post/:id" component={Post} />
          <Route
            exact
            path="/dashboard/createProfile"
            render={() => {
              return <CreateProfile createEdit="Create" />;
            }}
          />
          <Route
            exact
            path="/dashboard/editProfile"
            render={() => {
              return <CreateProfile createEdit="Edit" />;
            }}
          />
          <Route
            exact
            path="/dashboard/addExperience"
            component={AddExperience}
          />
          <Route
            exact
            path="/dashboard/addEducation"
            component={AddEducation}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
