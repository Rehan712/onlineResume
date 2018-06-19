import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import Spinner from "./Spinner";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";
import ProfileActions from "./ProfileActions";
import { Button } from "@material-ui/core";
import Experience from "./Experience.jsx";

class Dashboard extends Component {
  render() {
    const { profileData, deleteProfile } = this.props;
    console.log("this is profile data", profileData);
    return (
      // <!-- Dashboard -->
      <div>
        <div className="dashboard">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4">Dashboard</h1>

                {profileData.error && profileData.error.message ? (
                  <div>
                    <div>
                      {profileData.isLoading === true ? (
                        <CircularProgress />
                      ) : (
                        <div>
                          <p class="lead text-muted">
                            Welcome {localStorage.getItem("name")}
                          </p>
                          {profileData.error.message}
                        </div>
                      )}
                    </div>

                    <Link to="/dashboard/createProfile">
                      <div className="btn btn-primary">Create Profile </div>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <p class="lead text-muted">
                      Welcome{" "}
                      <Link to={`/profile/${profileData.data.handle}`}>
                        {" "}
                        {localStorage.getItem("name")}
                      </Link>
                    </p>
                    <ProfileActions {...this.props} />
                    <Experience
                      experience={
                        Object.keys(profileData.data).length &&
                        profileData.data.experience
                      }
                    />
                    <div style={{ marginBottom: 60 }}>
                      <Button
                        variant="raised"
                        color="secondary"
                        onClick={deleteProfile}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ profileData }) {
  return {
    profileData
  };
}
export default connect(
  mapStateToProps,
  {
    deleteProfile: actions.deleteProfileData
  }
)(Dashboard);
