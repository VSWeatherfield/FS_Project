import { useSelector } from "react-redux";

import { ajaxService } from "../../services/ajaxservice";
import { BlogForm } from "../../components";

import "./editBlog.css";

const EditBlog = (props) => {
  const { id } = props;

  const blog = useSelector((state) =>
    state.blogs.blogs.find((blog) => blog.id === id)
  );
  const { title, description } = blog;

  return (
    <BlogForm
      isModalOpen={props.isEditModalOpen}
      onClose={props.onClose}
      submitTitle="Сохранить тему"
      defaultTitle={title}
      defaultDescription={description}
      onSubmitForm={({ title, description }) => {
        const views = blog.views + 1;
        const answers = blog.answers + 1;

        ajaxService(`/blogs/${id}`, {
          method: "PUT",
          body: JSON.stringify({ title, description, views, answers }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }}
    />
  );
};

export default EditBlog;
