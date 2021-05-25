import './Music.scss';
import Song from "./Song/Song"
import { Component } from 'react';


class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs:[]
        };
        this.getSongs();
    }


    getSongs = () => {
        fetch("https://yxsi2gve7e.execute-api.us-east-1.amazonaws.com/Prod/hello").then((res) => {
            res.text().then((songsStr) => {
                let songsList = JSON.parse(songsStr);
                this.setState({songs:songsList})
            })
        })
    }

    render(){
        let fillers = this.state.songs.map((item, num) => {
            return <Song key={num} title={item.song} artist={item.artist} picUrl={item.img} url={item.url}></Song>
        })
        return (
            <div className="music">
                <div className="musicHeaderContainer">
                    <h1 className="musicHeader">Recently Liked</h1>
                </div>
                <div className="songsContainer">{fillers}</div>
            </div>
        );

    }
}


export default Music;
