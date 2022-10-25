import { createContext, createElement, useEffect, useState } from "react";

import { ajaxService } from "../../services/ajaxservice";
import { Topiclist, Topicheader } from "../../components";
import Forum from "../forum/Forum";

export function Main() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    ajaxService("/blogs").then((data) => {
      const blogs = [];

      data.forEach((blog) => {
        const blogElement = (
          <Topiclist
            id={blog.id}
            title={blog.title}
            description={blog.description}
          />
        );
        blogs.push(blogElement);
      });
      setBlogs(blogs);
    });
  });

  return <Forum blogs={blogs} />;
}

export default Main;
