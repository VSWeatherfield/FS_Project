import { UserMainPage } from "../"

export function Profile() {

  const id = 1;
  const userName = "VSWeatherfield";
  const mailField = "voff.smirnoff@gmail.com";

  return (
    <UserMainPage id={id} userName={userName} mailField={mailField} />
  );
}

export default Profile;
