import './Landing.scss';
import bg from '../../../imgs/backgrounds/home.svg'

function Landing() {

  return (
    <div className="landingContainer">
      <div className="welcomeContainer">
        <div className="welcomeTextContainer">
          <div className="welcome">I'm Ethan &#8212;</div>
          <div className="welcomeSubtext">welcome to my personal site</div>
        </div>
      </div>
      <img className="landingImage" alt="swiss-style initials" src={bg} />
    </div>
  );
}

export default Landing;

