import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ajaxService } from "../../services/ajaxservice";
import { BlogItem } from "../../containers";
import { Loader } from "../../components/loader/Loader";

export function Blog() {
  const params = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    ajaxService(`/blogs/${params.id}`).then((data) => {
      setBlog(data);
    });
  }, []);

  return (
    <div>
      {blog ? (
        <BlogItem
          id={blog.id}
          title={blog.title}
          description={blog.description}
        />
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Blog;
