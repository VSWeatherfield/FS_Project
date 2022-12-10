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
      onSubmitForm={({ description, date_activity }) => {
        ajaxService("/answers/", {
          method: "POST",
          body: JSON.stringify({ description, date_activity, blog }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }}
    />
  );
};

export default AnswerBlog;
