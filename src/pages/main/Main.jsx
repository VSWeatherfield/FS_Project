import { createContext, createElement, useEffect, useState } from "react";

import { ajaxService } from "../../services/ajaxservice";
import { Topiclist } from "../../components";
import { BlogCreate } from "../../containers";
import Forum from "../forum/Forum";

export function Main() {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    ajaxService("/blogs").then((data) => {
      setBlogs(data);
    });
  });

  return (
    <div>
      <BlogCreate
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Forum
        blogs={blogs.map((blog) => (
          <Topiclist
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
          />
        ))}
        openopen={() => setIsModalOpen(true)}
      />
    </div>
  );
}

export default Main;
