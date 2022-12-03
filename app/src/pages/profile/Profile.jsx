import { UserMainPage } from "../";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { isLogin } from "../../utils/isLogin";
import { ajaxService } from "../../services/ajaxservice";
import { useDispatch } from "react-redux";
import { setProfile } from "../../slices/profile";

export function Profile() {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.user.id);

  useEffect(() => {
    if (isLogin()) {
      ajaxService(`/profile/${userId}/`).then((data) => {
        dispatch(setProfile(data));
      });
    }
  }, []);

  return <UserMainPage />;
}

export default Profile;
