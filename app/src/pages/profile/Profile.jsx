import { UserMainPage } from "../";
import { UseUser, UseProfile } from "../../hooks";

export function Profile() {
  UseUser();
  UseProfile();

  return <UserMainPage />;
}

export default Profile;