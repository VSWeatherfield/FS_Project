import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ajaxService } from "../services/ajaxservice";
import { setUsersMore } from "../slices/users";

export function UseUser(userId) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.userObjs[userId]);

  useEffect(() => {
    if (user) {
      return;
    }
    ajaxService(`/users/${userId}`).then((data) => {
      dispatch(setUsersMore([data]));
    });
  }, []);

  return user;
}

export default UseUser;
