import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ajaxService } from "../services/ajaxservice";
import { setOlympsMore } from "../slices/olympiads";

export function UseOlymp(olympId) {
  const dispatch = useDispatch();
  const olymp = useSelector((state) => state.olymps.olympObjs[olympId]);

  useEffect(() => {
    if (olymp) {
      return;
    }
    ajaxService(`/olymps/${olympId}`).then((data) => {
      dispatch(setOlympsMore([data]));
    });
  }, []);

  return olymp;
}

export default UseOlymp;
