import { useSelector } from "react-redux";

import { ajaxService } from "../../../services/ajaxservice";
import { AnswerForm } from "../../";

import "./answerBlog.css";

const AnswerBlog = (props) => {
  const blog = useSelector((state) => state.blogs.blogObj[props.blogId]);
  const id = useSelector(
    (state) => blog.answers.length + 1 + state.answers.answerIds.length
  );
  console.log(blog);
  console.log(id);

  const updateAnswers = (blog, id) => {
    return {
      ...blog,
      answers: [...blog.answers, id],
    };
  };

  return (
    <AnswerForm
      onClose={props.onClose}
      answerBlog={blog}
      submitTitle="Ответить"
      onSubmitForm={({ description }) => {
        const user = 1;

        ajaxService("/answers", {
          method: "POST",
          body: JSON.stringify({
            description,
            user,
            id,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        ajaxService(`/blogs/${props.blogId}`, {
          method: "PUT",
          body: JSON.stringify(updateAnswers(blog, id)),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }}
    />
  );
};

export default AnswerBlog;
