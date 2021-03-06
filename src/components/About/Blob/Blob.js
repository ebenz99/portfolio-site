import './Blob.scss';
import './keyframes/hobbyKeyframes.scss';
import './keyframes/interestKeyframes.scss';
import './keyframes/moreKeyframes.scss';

function Blob(props) {
const style = {'animationName': props.animationName, "position": 'relative'}
  return (
    <div className="ibox">
      <div style={style} className={`${props.type}Blob blob`}>
        <p className="blobText">
          {props.name}

        </p>
      </div>
    </div>
  );
}

export default Blob;