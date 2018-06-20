import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateProfile from "../createProfile/CreateProfile";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import * as actions from "../../actions";
import AddExperience from "../addCredentials/AddExperience";
import AddEducation from "../addCredentials/AddEducation";
import { shape, func, arrayOf, any, string } from "prop-types";

class DashboardHome extends React.Component {
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    const { profileData } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/dashboard"
            render={() => {
              return <Dashboard profile={profileData.data} />;
            }}
          />
          <Route
            path="/dashboard/createProfile"
            render={() => {
              return <CreateProfile createEdit="Create" />;
            }}
          />
          <Route
            path="/dashboard/editProfile"
            render={() => {
              return <CreateProfile createEdit="Edit" />;
            }}
          />
          <Route path="/dashboard/addExperience" component={AddExperience} />
          <Route path="/dashboard/addEducation" component={AddEducation} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profileData: state.profileData
  };
}

DashboardHome.propTypes = {
  profileData: shape({
    data: shape({
      handle: string,
      location: string,
      education: arrayOf(any),
      experience: arrayOf(any)
    })
  })
};

export default connect(
  mapStateToProps,
  { getProfile: actions.getCurrentProfile }
)(DashboardHome);
