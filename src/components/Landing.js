import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Playlist from './Playlist';
import Video from './Video';


class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: "",//holds the video which is playing
            link: "", // holds the user input(link)
            playlist: [
            ] //holds all the added links
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onVideoEnd = this.onVideoEnd.bind(this);
        this.deleteVideo = this.deleteVideo.bind(this);
        this.onEndVideo = this.onEndVideo.bind(this);
    }


    //This handles the user input
    handleChange(event) {
        this.setState({ link: event.target.value })
    }
 
   
    //Adds the new link to playlist
    handleSubmit(event) {

     
        // if (url != undefined || url != '') {
        //     var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        //     var match = url.match(regExp);
        //     if (match && match[2].length == 11) {
        //         // Do anything for being valid
        //         // if need to change the url to embed url then use below line
        //         $('#ytplayerSide').attr('src', 'https://www.youtube.com/embed/' + match[2] + '?autoplay=0');
        //     }
        //     else {
        //         // Do anything for not being valid
        //     }
        // }

        const url = this.state.link;
        const play = this.state.playlist.map((link, key) => link);
        const newSong = { url: url, isOn: false };
        play.push(newSong);
        this.setState({ playlist: play })
        this.setState({ link: " " });
        
        event.preventDefault();
    }

    //When Video is selected to play
    onVideoEnd(id) {
        const play = this.state.playlist.map((link, key) => link);
        const current = play[id.key];//New line added
        this.setState({ current });
        play.splice(id.key, 1);
        if (play.length !== 0) {
            const topVid = play[0];
            // topVid.isOn=true;
            play.shift();
            play.unshift(topVid);
        }

        this.setState({ playlist: play });


    }

    //When video is removed from playlist
    deleteVideo(index) {

        console.log("index= " + index.key);
        const play = this.state.playlist.map((link, key) => link);
        console.log(play[0]);
        console.log(play[1]);
        console.log("index= " + index.key);
        play.splice(index.key, 1);
        console.log(play);
        this.setState({ playlist: play })

    }

    //When the video ends
    onEndVideo() {
        const play = this.state.playlist.map((link, key) => link);

        if (play.length !== 0) {
            const current = play[0];
            play.shift();
            this.setState({ current, playlist: play });
        }
        else {
            this.setState({ current: "" })
        }
    }

    render() {

        return (
            <div className="landing-grid">
                <Grid>
                    <Cell col={7}>
                        <div className="input-link"  >
                            <h3>Add link:</h3>
                            <form onSubmit={this.handleSubmit} >
                                <input placeholder="Add...." style={{ width: "300px", borderWidth: "2px", height: "2rem", }} type="text" name="ytlink" value={this.state.link} onChange={this.handleChange} ></input>
                                <button type="submit" style={{ borderWidth: "2px", height: "35px", width: "30px" }}><i class="fas fa-plus"></i></button>
                            </form>
                        </div>
                        <Video link={this.state.current} endVideo={this.onEndVideo} />
                    </Cell>


                    <Cell col={5} className='second-col'>
                        <Playlist playlist={this.state.playlist} videoStart={this.onVideoStart} videoEnd={this.onVideoEnd} deleteVideo={this.deleteVideo} />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;