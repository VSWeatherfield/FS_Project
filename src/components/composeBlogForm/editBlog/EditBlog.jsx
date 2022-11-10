import { useSelector } from "react-redux";

import { ajaxService } from "../../../services/ajaxservice";
import { BlogForm } from "../..";

import "./editBlog.css";

const EditBlog = (props) => {
  const { id } = props;
  const blog = useSelector((state) => state.blogs.blogObj[id]);
  const { title, description } = blog;

  const updateBlog = (blog, title, description) => {
    return {
      ...blog,
      views: blog.views + 1,
      answers: blog.answers + 1,
      title: title,
      description: description,
    };
  };

  return (
    <BlogForm
      onClose={props.onClose}
      submitTitle="Сохранить тему"
      defaultTitle={title}
      defaultDescription={description}
      onSubmitForm={({ title, description }) => {
        ajaxService(`/blogs/${id}`, {
          method: "PUT",
          body: JSON.stringify(updateBlog(blog, title, description)),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }}
    />
  );
};

export default EditBlog;
