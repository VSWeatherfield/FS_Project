import { useSelector } from "react-redux";

import { UseAnswers, UseBlog } from "../../../hooks";
import { AnswerItem } from "../../../containers";

const AnswerList = ({ blogId }) => {
  UseAnswers();

  const ansList = useSelector(
    (state) => state.blogs.blogObj[blogId].answer_set
  );

  return (
    <>
      {ansList.map((answer) => (
        <AnswerItem key={answer} answerId={answer} />
      ))}
    </>
  );
};

export default AnswerList;
