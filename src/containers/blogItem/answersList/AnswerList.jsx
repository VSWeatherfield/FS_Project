import { useSelector } from "react-redux";

import { AnswerItem } from "../../../containers";

const AnswerList = ({ blogId }) => {
  const ansList = useSelector((state) => state.blogs.blogObj[blogId].answers);

  return (
    <>
      {ansList.map((answer) => (
        <AnswerItem key={answer} answerId={answer} />
      ))}
    </>
  );
};

export default AnswerList;
