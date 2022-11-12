import { ajaxService } from "../../../services/ajaxservice";
import { BlogForm } from "../../";

import "./createBlog.css";

const CreateBlog = (props) => {
  return (
    <BlogForm
      onClose={props.onClose}
      submitTitle="Создать тему"
      onSubmitForm={({ title, description }) => {
        const views = 0;
        const answersNum = 0;

        ajaxService("/blogs", {
          method: "POST",
          body: JSON.stringify({ title, description, views, answersNum }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }}
    />
  );
};

export default CreateBlog;
