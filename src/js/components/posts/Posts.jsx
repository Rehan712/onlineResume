import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { postData, errors } = this.props;
    const postContent = postData.data.length && (
      <PostFeed posts={postData.data} />
    );
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
              {Object.keys(errors).length ? (
                <div className="invalid-feedback">{errors.message}</div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    postData: state.postsData,
    errors: state.errors
  };
}

export default connect(
  mapStateToProps,
  { getPosts: actions.getPosts }
)(Posts);
