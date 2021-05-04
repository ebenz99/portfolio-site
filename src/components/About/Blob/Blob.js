import './Blob.scss';
import './keyframes.scss';

function Blob(props) {
const style = {'animationName': props.animationName, "position": 'relative'}
  return (
    <div className="ibox">
      <div style={style} className={`${props.type}Blob blob`}>
          {props.name}
      </div>
    </div>
  );
}

export default Blob;