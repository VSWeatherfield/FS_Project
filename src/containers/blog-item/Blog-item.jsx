import React from "react";
import { Link } from "react-router-dom";

import "./blog-item.css";

const BlogItem = (props) => {
  const { id, title, description } = props;

  return (
    <div class="main-outlet-wrapper">
      <div class="wrap">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default BlogItem;
