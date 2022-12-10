import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { isLogin } from "../utils/isLogin";
import { setProfile } from "../slices/profile";
import { ajaxService } from "../services/ajaxservice";
export function UseProfile() {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.user.user?.id);

  useEffect(() => {
    if (isLogin()) {
      ajaxService(`/profile/${userId}/`).then((data) => {
        dispatch(setProfile(data));
      });
    }
  }, []);
}

export default UseProfile;
