import './Landing.scss';
import bg from '../../../backgrounds/home.svg'

function Landing() {

  return (
    <div className="landingContainer">
      <div className="welcomeContainer">
        <div className="welcomeTextContainer">
          <div className="welcome">Welcome</div>
          <div className="welcomeSubtext">to my personal site.</div>
        </div>
      </div>
      <img className="landingImage" alt="swiss-style initials" src={bg} />
    </div>
  );
}

export default Landing;

