import './Song.scss';

function Song(props) {
  return (
      <a className="songContainer" href={props.url} target="_blank" rel="noreferrer">
        <div className="song">
            <div className="albumArtContainer">
                <img className="albumArt" src={props.picUrl} alt={props.title}></img>
            </div>
            <div className="songTitleContainer">&nbsp;{props.title}</div>
            <div className="artistContainer">
                &nbsp;&nbsp;-&nbsp;&nbsp;{props.artist}
            </div>
            
        </div>
      </a>
  );
}



export default Song;
