import { useParams } from "react-router-dom";

import { UseBlog, UseUser } from "../../hooks";
import { BlogItem } from "../../containers";
import { Loader } from "../../components/loader/Loader";

export function Blog() {
  const params = useParams();
  const initialBlog = UseBlog(params.id);
  //const user = UseUser(initialBlog.user);

  return (
    <div>
      {initialBlog ? (
        <BlogItem
          blog={initialBlog}
          //id={initialBlog.id}
          //title={initialBlog.title}
          //description={initialBlog.description}
          //user={user}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Blog;
