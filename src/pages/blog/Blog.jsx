import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ajaxService } from "../../services/ajaxservice";
import { BlogItem } from "../../containers";
import { Loader } from "../../components/loader/Loader";
import { setBlogsMore } from "../../slices/blogs";

export function Blog() {
  const dispatch = useDispatch();
  const params = useParams();
  const [blog, setBlog] = useState(null);
  const initialBlog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === Number(params.id))
  );

  useEffect(() => {
    if (initialBlog) {
      return;
    }
    ajaxService(`/blogs/${params.id}`).then((data) => {
      dispatch(setBlogsMore(data));
    });
  }, []);

  return (
    <div>
      {initialBlog ? (
        <BlogItem
          id={initialBlog.id}
          title={initialBlog.title}
          description={initialBlog.description}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Blog;
