import './Music.scss';
import { Song } from "./Song/Song"
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Component } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';


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
            return <div className="thing" key={num}>sdf </div>
        })
        return (
            <div className="music">
                <div className="musicHeaderContainer">
                    <h1 className="musicHeader">Recently Liked Songs</h1>
                </div>
                <div className="songContainer">{fillers}</div>
            </div>
        );

    }
}


export default Music;
