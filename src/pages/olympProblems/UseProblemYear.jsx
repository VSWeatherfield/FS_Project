import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ajaxService } from "../../services/ajaxservice";
import { setOlympsMore } from "../../slices/olympiads";

export function useProblemYear(olympId, yearId) {
  const dispatch = useDispatch();
  const olymp = useSelector((state) => state.olymps.olympObjs[olympId]);
  const year = useSelector((state) => state.olymps.years[yearId]);

  useEffect(() => {
    if (olymp && year) {
      return;
    }
    ajaxService(`/olympiads/${olympId}/years/${yearId}`).then((data) => {
      dispatch(setOlympsMore([data]));
    });
  }, []);

  return { olymp, year };
}

export default useProblemYear;
