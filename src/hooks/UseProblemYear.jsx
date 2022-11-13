import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ajaxService } from "../services/ajaxservice";
import { setOlympsMore } from "../slices/olympiads";

export function UseProblemYear(olympId, yearId) {
  const dispatch = useDispatch();
  const olymp = useSelector((state) => state.olymps.olympObjs[olympId]);
  const year = useSelector((state) => state.olymps.years[yearId]);

  useEffect(() => {
    if (olymp && year) {
      return;
    }
    ajaxService(`/olympiads/${olympId}`).then((data) => {
      dispatch(setOlympsMore([data]));
    });
  }, []);

  return { olymp, year };
}

export default UseProblemYear;
