import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { isLogin } from "../utils/isLogin";
import { setUser } from "../slices/user";
import { ajaxService } from "../services/ajaxservice";

export function UseUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLogin()) {
      ajaxService("/user/current").then((data) => {
        dispatch(setUser(data));
      });
    }
  }, []);
}

export default UseUser;
