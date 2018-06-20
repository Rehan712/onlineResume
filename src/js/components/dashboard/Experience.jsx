import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import Moment from "react-moment";
import { arrayOf, func, any } from "prop-types";

const Experience = ({ experience, deleteExperience }) => {
  console.log("this is experience", experience);
  const renderData =
    experience.length &&
    experience.map(item => {
      return (
        <tr>
          <td>{item.company}</td>
          <td>{item.title}</td>
          <td>
            {" "}
            <Moment format="YYYY/MM/DD">{item.from}</Moment> -{" "}
            {item.to === null ? (
              "Now"
            ) : (
              <Moment format="YYYY/MM/DD">{item.to}</Moment>
            )}
          </td>
          <td>
            <button
              onClick={() => deleteExperience(item._id)}
              class="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  return (
    <div>
      <h4 class="mb-2">Experience Credentials</h4>
      <table class="table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {experience.length && renderData.length
            ? renderData
            : "There is no Experience added"}
        </tbody>
      </table>
    </div>
  );
};

Experience.propTypes = {
  deleteExperience: func.isRequired,
  experience: arrayOf(any).isRequired
};

export default connect(
  null,
  { deleteExperience: actions.deleteExperience }
)(Experience);
