import { useSelector } from "react-redux";

import { UseBlogs } from "../../hooks";
import { Topiclist } from "../../components";
import { Forum } from "../../pages";
import UseProfiles from "../../hooks/UseProfiles";

export function Main() {
  const blogs = useSelector((state) => state.blogs.blogIds);
  UseBlogs();
  UseProfiles();

  return (
    <Forum
      blogs={blogs.map((blog) => (
        <Topiclist key={blog} id={blog} />
      ))}
    />
  );
}

export default Main;
