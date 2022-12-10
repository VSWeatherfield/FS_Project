import { useParams } from "react-router-dom";

import { UseBlog } from "../../hooks";
import { BlogItem } from "../../containers";
import { Loader } from "../../components/loader/Loader";

export function Blog() {
  const params = useParams();
  const initialBlog = UseBlog(params.id);

  return (
    <div>{initialBlog ? <BlogItem blog={initialBlog} /> : <Loader />}</div>

      );
}

export default Blog;
