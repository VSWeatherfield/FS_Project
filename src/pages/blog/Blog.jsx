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

{
  /*


export function Blog() {
  const params = useParams();
  const { blog, setBlog } = useState(null);

  useEffect(() => {
    ajaxService(`/blogs/${params.id}`).then((data) => {
      setBlog(data);
    });
  }, []);

  console.log(blog);

  return (
    <div>
      <h1>
        as;fdf <br></br>
        as;fdf <br></br>
        as;fdf <br></br>
        as;fdf <br></br>
        as;fdf <br></br>
      </h1>

      {blog && (
      <BlogItem
        id={blog.id}
        title={blog.title}
        description={blog.description}
      />

    </div>
  );
}
*/
}

export default Blog;
