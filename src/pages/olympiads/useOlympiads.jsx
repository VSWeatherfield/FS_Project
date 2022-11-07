import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ajaxService } from "../../services/ajaxservice";
import { setOlymps, setOlympsMore } from "../../slices/olympiads";

export function useOlymps() {
  const dispatch = useDispatch();

  useEffect(() => {
    ajaxService(`/olympiads`).then((data) => {
      dispatch(setOlymps(data));
    });
  }, []);
}

export default useOlymps;
