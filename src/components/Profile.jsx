import "../css/components/_profile.css";
import { profileText } from "../static/data/profile";

const Profile = () => {
  return (
    <aside className="profile">
      <h1 className="name">LUIZ GONTIJO</h1>
      <hr />
      <div className="description">
        {profileText.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </aside>
  );
};

export default Profile;
