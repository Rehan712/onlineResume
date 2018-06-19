import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Experience = ({ experience, deleteExperience }) => {
  console.log("this is experience", experience);
  const renderData =
    experience.length &&
    experience.map(item => {
      return (
        <tr>
          <td>{item.company}</td>
          <td>{item.title}</td>
          <td>{item.from + " - " + item.to}</td>
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
        <tbody>{renderData}</tbody>
      </table>
    </div>
  );
};

export default connect(
  null,
  { deleteExperience: actions.deleteExperience }
)(Experience);
