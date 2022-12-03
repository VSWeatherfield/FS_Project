import { useSelector } from "react-redux";

import { ajaxService } from "../../../services/ajaxservice";
import { BlogForm } from "../..";

import "./editBlog.css";

const EditBlog = (props) => {
  const { id } = props;
  const blog = useSelector((state) => state.blogs.blogObj[id]);
  const { title, description, topic } = blog;

  const updateBlog = (blog, title, description, topic) => {
    return {
      ...blog,
      num_views: blog.num_views + 1,
      title: title,
      description: description,
      topic: topic,
    };
  };

  return (
    <BlogForm
      onClose={props.onClose}
      submitTitle="Сохранить тему"
      defaultTitle={title}
      defaultDescription={description}
      defaultTopic={topic}
      onSubmitForm={({ title, description, topic }) => {
        ajaxService(`/blogs/${id}/`, {
          method: "PUT",
          body: JSON.stringify(updateBlog(blog, title, description, topic)),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }}
    />
  );
};

export default EditBlog;
