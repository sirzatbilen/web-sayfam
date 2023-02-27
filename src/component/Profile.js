import "./Profile.css";

export default function Profile() {
  return (
    <div className="profileTitle">
      <div>
        <h1>Profile</h1>
      </div>
      <div className="profile">
        <div className="myprofile">
          <p className="başlık">Profile</p>
          <div className="profilul">
            <div className="profilsoru">
              <p> Date of Birth: </p>
              <p> City: </p>
              <p>Education:</p>
              <p className="pos">Position: </p>
            </div>
            <div>
              <p>23.03.1999</p>
              <p className="antalya">Antalya</p>
              <p>Computer Engineering at Süleyman Demirel University, 2022</p>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
        <div className="aboutme">
          <p className="başlık">About Me</p>
          <p>
            I graduated from the computer engineering department at süleyman
            demirel university in 2022 and attended a training camp to continue
            improving myself. I will continue as a full stack developer from may
            2023.
          </p>
        </div>
      </div>
      <div className="lineContainer">
        <div className="line2"></div>
      </div>
    </div>
  );
}
