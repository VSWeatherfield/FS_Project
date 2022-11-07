import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ajaxService } from "../../services/ajaxservice";
import { setOlympsMore } from "../../slices/olympiads";

export function useOlymp(olympId) {
  const dispatch = useDispatch();
  const olymp = useSelector((state) => state.olymps.olympObjs[olympId]);

  useEffect(() => {
    if (olymp) {
      return;
    }
    ajaxService(`/olympiads/${olympId}`).then((data) => {
      dispatch(setOlympsMore([data]));
    });
  }, []);

  return olymp;
}

export default useOlymp;
