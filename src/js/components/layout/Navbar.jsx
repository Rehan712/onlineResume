import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { isTokenValid } from "../../utils";
import { func } from "prop-types";

const Navbar = ({ signoutUser, display }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DevConnector
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/allProfiles" className="nav-link">
                  {" "}
                  Developers
                </Link>
              </li>
            </ul>
            {isTokenValid() === true && display ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/feed">
                    Post Feed
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => signoutUser()}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      className="rounded-circle"
                      style={{ width: 25, marginRight: 5 }}
                      src={localStorage.getItem("avatar")}
                      alt={localStorage.getItem("name")}
                    />{" "}
                    Logout
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Sign Up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
Navbar.proptypes = {
  signoutUser: func.isRequired
};
Navbar.defaultProps = {
  display: true
};
function mapStateToProps({ success }) {
  return {
    display: success.display
  };
}
export default connect(
  mapStateToProps,
  { signoutUser: actions.signoutUser }
)(Navbar);
