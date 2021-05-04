import './About.scss';
import Blob from'./Blob/Blob';
import { HOBBIES } from '../../constants.js'

function About() {
  return (
    <div className="About">
        <div className="topLine">
            Hi, I'm Ethan. I got my B.S. in Computer Science from Clemson University in 2021, and I'm currently working at AWS.
        </div>
        <div className="aboutHeader">
            <h2 className="aboutHeaderText"><em className="interests">Interests,</em>&nbsp;<em className="hobbies">Hobbies,</em>&nbsp;and&nbsp;<em className="more">more</em></h2>
        </div>
        <div className="blobFest">
            {
                HOBBIES.map((hobby, idx) => {
                    return <Blob type="hobby" name={hobby} animationName={`hobby${idx}`} key={idx}></Blob>
                })
            }
        </div>
        
    </div>
  );
}

export default About;