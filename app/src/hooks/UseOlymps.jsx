import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ajaxService } from "../services/ajaxservice";
import { setOlymps } from "../slices/olympiads";

export function UseOlymps() {
  const dispatch = useDispatch();

  useEffect(() => {
    ajaxService(`/olymps`).then((data) => {
      dispatch(setOlymps(data.results));
    });
  }, []);
}

export default UseOlymps;
