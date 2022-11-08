import { useSelector } from "react-redux";

import { Topiclist } from "../../components";
import { Forum, useBlogs } from "../../pages";

export function Main() {
  const blogs = useSelector((state) => state.blogs.blogIds);
  useBlogs();

  return (
    <Forum
    blogs={blogs.map((blog) => (
        <Topiclist key={blog} id={blog} />
      ))}
    />
  );
}

export default Main;
