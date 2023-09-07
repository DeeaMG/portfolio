import "./Profile.scss";
import profile from "../../assets/profile-photo.jpg";
import logo from "../../assets/logo.png";

function Profile() {
  return (
    <div>
      <div className='logo-container'>
        <img src={logo} alt='Logo' className='logo' />
      </div>
      <div className='about-me-container'>
        <p className='description'>
          <h2>Designing the Web with Code & Creativity</h2>
          <h5>
            Hi there! I'm Ganea Andreea, an experienced Web Developer with over 2 years under my
            belt. Welcome to my creative world!
          </h5>
          <div className='button-container'>
            <button className='cv-button'>Know me better</button>
          </div>
        </p>

        <img src={profile} alt='Profile image' className='profile-image' />
      </div>
      <div className='footer-container'>
        <h2>Footer + Socials</h2>
      </div>
    </div>
  );
}

export default Profile;
