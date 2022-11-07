import Latex from "react-latex";

import "./blog-item.css";

const BlogItem = (props) => {
  const { title, description } = props;

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
