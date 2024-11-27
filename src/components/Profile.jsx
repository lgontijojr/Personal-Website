import { profileText } from "../static/data/profile";
import profilePicture from "../static/images/ProfilePicture.png";

import "../css/components/_profile.css";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <h1 className="name">👋🏽 Hi, I'm Luiz</h1>
        <hr />
        <div className="description">
          {profileText.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
      <div>
        <img className="profile-image" src={profilePicture} />
      </div>
    </>
  );
};

export default Profile;
