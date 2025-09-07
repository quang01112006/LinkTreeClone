import coverImg from "../assets/images/cover.webp";
import avtImg from "../assets/images/avt.webp";
import "./Header.css";

function Header({ name, userName, bio }) {
  return (
    <>
      <div class="profile">
        <img src={coverImg} alt="cover" className="cover" />
        <div class="info-row">
          <img src={avtImg} alt="avt" className="avt" />
          <div class="name-section">
            <div className="name">{name}</div>
            <div className="user-name">{userName}</div>
          </div>
        </div>
        <p className="bio">{bio}</p>
      </div>
    </>
  );
}
export default Header;
