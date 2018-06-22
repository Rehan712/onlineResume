import React from "react";
import PostItem from "./PostItem";

export default ({ posts }) => {
  return (
    <div>
      <div>{posts.map((item, key) => <PostItem key={key} post={item} />)}</div>
    </div>
  );
};
