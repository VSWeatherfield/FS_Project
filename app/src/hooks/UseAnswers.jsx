import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ajaxService } from "../services/ajaxservice";
import { setAnswers, setAnswersMore } from "../slices/answers";

export function UseAnswers() {
  const dispatch = useDispatch();

  useEffect(() => {
    ajaxService(`/answers`).then((data) => {
      dispatch(setAnswers(data.results));
    });
  }, []);
}

export default UseAnswers;
