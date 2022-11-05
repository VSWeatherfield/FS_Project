import React from "react";
import Latex from "react-latex";
import { Link } from "react-router-dom";

import "./blog-item.css";

const BlogItem = (props) => {
  const { id, title, description } = props;

  return (
    <div className="main-outlet-wrapper">
      <div className="wrap">
        <h1>
          <Latex>{title}</Latex>
        </h1>
        <p>
          <Latex>{description}</Latex>
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
