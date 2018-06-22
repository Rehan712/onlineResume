import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";
import axios from "axios";

class PostItem extends Component {
  render() {
    const {
      post,
      auth,
      deletePost,
      addLikePost,
      removeLikePost,
      showActions,
      errors,
      getPosts
    } = this.props;
    return (
      <div>
        <div class="posts">
          <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-2">
                <a href="profile.html">
                  <img
                    class="rounded-circle d-none d-md-block"
                    src={post.avatar}
                    alt=""
                  />
                </a>
                <br />
                <p class="text-center">{post.name}</p>
              </div>
              <div class="col-md-10">
                <p class="lead">{post.text}</p>
                {showActions && (
                  <span>
                    <button
                      type="button"
                      class="btn btn-light mr-1"
                      onClick={() => {
                        addLikePost(post._id);
                        setTimeout(() => getPosts(), 2000);
                      }}
                    >
                      <i class="text-info fas fa-thumbs-up" />
                      <span class="badge badge-light">
                        {post.likes && post.likes.length}
                      </span>
                    </button>
                    <button
                      type="button"
                      class="btn btn-light mr-1"
                      onClick={() => {
                        removeLikePost(post._id);
                        setTimeout(() => getPosts(), 2000);
                      }}
                    >
                      <i class="text-secondary fas fa-thumbs-down" />
                    </button>
                    <Link to={`/post/${post._id}`} class="btn btn-info mr-1">
                      Comments
                    </Link>
                    {post.user === auth._id ? (
                      <button
                        class="btn btn-danger mr-1"
                        onClick={() => {
                          deletePost(post._id);
                          setTimeout(() => getPosts(), 2000);
                        }}
                      >
                        <i class="fas fa-times" />
                      </button>
                    ) : (
                      ""
                    )}
                  </span>
                )}
                {Object.keys(errors).length ? (
                  <div className="invalid-feedback">{errors.message}</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
PostItem.defaultProps = {
  showActions: true
};
function mapStateToProps(state) {
  return {
    auth: state.profileData.data.user,
    errors: state.errors
  };
}
export default connect(
  mapStateToProps,
  {
    deletePost: actions.deletePost,
    addLikePost: actions.addLikePost,
    removeLikePost: actions.removeLikePost,
    getPosts: actions.getPosts
  }
)(PostItem);
