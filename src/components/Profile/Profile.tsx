import "./Profile.scss";
import profile from "../../assets/profile-photo.jpg";

function Profile() {
  const onDownloadCV = () => {
    const cvPath: string = process.env.PUBLIC_URL + "assets/Ganea_Andreea_Maria.pdf";

    const anchor: HTMLAnchorElement = document.createElement("a");
    anchor.href = cvPath;
    anchor.download = "Ganea_Andreea_Maria.pdf";
    anchor.click();
  };

  return (
    <div>
      <div className="about-me-container">
        <div className="description">
          <h1>Designing the Web with Code & Creativity</h1>
          <h4>
            Hi there! I'm Ganea Andreea, an experienced Web Developer with over 2 years under my
            belt. Welcome to my creative world!
          </h4>
          <div className="button-container">
            <button className="cv-button" onClick={onDownloadCV}>
              Know me better
            </button>
          </div>
        </div>

        <img src={profile} alt="Profile" className="profile-image" />
      </div>
    </div>
  );
}

export default Profile;
