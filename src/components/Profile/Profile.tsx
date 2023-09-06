import "./Profile.scss";
import profile from "../../assets/profile-photo.jpg";
import logo from "../../assets/logo.png";

function Profile() {
  return (
    <div>
      <div className="about-me">
        <p className="description">
          <h2>Designing the Web with Code & Creativity: Ganea Andreea's Digital Playground</h2>
          <h5>
            Hi there! I'm Ganea Andreea, an experienced Web Developer with over 2 years under my
            belt, and an aspiring Graphic Designer ready to make my mark. Welcome to my creative
            world!
          </h5>
        </p>

        <img src={profile} alt="Profile image" className="profile-image" />
      </div>
      <div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="footer">
        <h2>Footer + Socials</h2>
      </div>
    </div>
  );
}

export default Profile;
