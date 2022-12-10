import { useSelector, useDispatch } from "react-redux";

import { ajaxService } from "../../../services/ajaxservice";
import { updateBlog } from "../../../slices/blogs";
import { BlogForm } from "../../";

import "./editBlog.css";

const EditBlog = (props) => {
  const dispatch = useDispatch();

  const { id } = props;
  const blog = useSelector((state) => state.blogs.blogObj[id]);
  const { title, description, topic } = blog;

  return (
    <BlogForm
      onClose={props.onClose}
      submitTitle="Сохранить тему"
      defaultTitle={title}
      defaultDescription={description}
      defaultTopic={topic}
      onSubmitForm={({ title, description, topic }) => {
        ajaxService(`/blogs/${id}/`, {
          method: "PATCH",
          body: JSON.stringify({ title, description, topic }),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((data) => {
          dispatch(updateBlog(data));
        });
      }}
    />
  );
};

export default EditBlog;
