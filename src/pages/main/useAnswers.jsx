import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajaxService } from "../../services/ajaxservice";
import { setAnswers, setAnswersMore } from "../../slices/answers";

export function useAnswers() {
  const dispatch = useDispatch();

  useEffect(() => {
    ajaxService(`/answers`).then((data) => {
      dispatch(setAnswers(data));
    });
  }, []);
}

export default useAnswers;
