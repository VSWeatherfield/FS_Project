import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ajaxService } from "../services/ajaxservice";
import { setUsers } from "../slices/users";

export function UseUsers() {
  const dispatch = useDispatch();

  useEffect(() => {
    ajaxService(`/users`).then((data) => {
      dispatch(setUsers(data));
    });
  }, []);
}

export default UseUsers;
