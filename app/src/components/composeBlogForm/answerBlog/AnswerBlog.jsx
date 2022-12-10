import { useSelector, useDispatch } from "react-redux";

import { ajaxService } from "../../../services/ajaxservice";
import { AnswerForm } from "../../";

import "./answerBlog.css";

const AnswerBlog = (props) => {
  const blog = useSelector((state) => state.blogs.blogObj[props.blogId].id);

  return (
    <AnswerForm
      onClose={props.onClose}
      answerBlog={blog}
      submitTitle="Ответить"
      onSubmitForm={({ description }) => {
        ajaxService("/answers/", {
          method: "POST",
          body: JSON.stringify({ description, blog }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }}
    />
  );
};

export default AnswerBlog;
