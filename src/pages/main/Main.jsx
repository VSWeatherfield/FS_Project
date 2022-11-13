import { useSelector } from "react-redux";

import { useBlogs } from "../../hooks"
import { Topiclist } from "../../components";
import { Forum, useAnswers } from "../../pages";

export function Main() {
  const blogs = useSelector((state) => state.blogs.blogIds);
  useBlogs();
  useAnswers();

  return (
    <Forum
      blogs={blogs.map((blog) => (
        <Topiclist key={blog} id={blog} />
      ))}
    />
  );
}

export default Main;
