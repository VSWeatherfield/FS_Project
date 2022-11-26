import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ajaxService } from "../services/ajaxservice";
import { setOlympsMore } from "../slices/olympiads";

export function UseProblemYear(olympId) {
  const dispatch = useDispatch();
  const olymp = useSelector((state) => state.olymps.olympObjs[olympId]);

  useEffect(() => {
    ajaxService(`/olymps/${olympId}`).then((data) => {
      dispatch(setOlympsMore([data]));
    });
  }, []);

  return { olymp };
}

export default UseProblemYear;
