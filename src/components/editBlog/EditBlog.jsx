import { ajaxService } from "../../services/ajaxservice";
import { BlogForm } from "../../components";

import "./editBlog.css";

const EditBlog = (props) => {
  const { blogId } = props;

  return (
    <BlogForm
      isModalOpen={props.isEditModalOpen}
      onClose={props.onClose}
      submitTitle="Сохранить тему"
      onSubmitForm={({ title, description }) => {
        const views = 0;
        const answers = 0;

        ajaxService(`/blogs/${blogId}`, {
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
