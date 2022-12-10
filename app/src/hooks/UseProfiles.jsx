import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ajaxService } from "../services/ajaxservice";
import { setProfiles } from "../slices/profiles";

export function UseProfiles() {
  const dispatch = useDispatch();

  useEffect(() => {
    ajaxService(`/profile/`).then((data) => {
      dispatch(setProfiles(data.results));
    });
  }, []);
}

export default UseProfiles;
