import React, { Component } from 'react';
import { Grid, Cell,Textfield } from 'react-mdl';
import Playlist from './Playlist';
import Video from './Video';

//Landing Page - has two child components
class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: "",//holds the video which is playing
            link: "", // holds the user input(link)
            playlist: [
            ] //holds all the added links
        }

        //Binding the event handlers
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onVideoEnd = this.onVideoEnd.bind(this);
        this.deleteVideo = this.deleteVideo.bind(this);
        this.onEndVideo = this.onEndVideo.bind(this);
        this.reorderVideoUp = this.reorderVideoUp.bind(this);
        this.reorderVideoDown = this.reorderVideoDown.bind(this);
        this.reset = this.reset.bind(this);
    }


    //This handles the user input
    handleChange(event) {
        this.setState({ link: event.target.value })
    }


    //Adds the new link to playlist
    handleSubmit(event) {

        const url = this.state.link;

        //URL Validation
        if (url.includes("www.youtube.com")) {
            
            if (url != undefined || url != '') 
            {
                //Regex for validation
                var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
                var match = url.match(regExp);
                if (match && match[2].length == 11) {
                    const play = this.state.playlist.map((link, key) => link);
                    const newSong = { url: url, isOn: false };
                    play.push(newSong);
                    this.setState({ playlist: play })
                    this.setState({ link: " " });
                    // console.log("Success");
                }
                else {
                    alert("Please Check the Url again!");
                }
            }
        }
        else
            alert("Please Check the Url again!");


        event.preventDefault();
    }

    //When Video is selected to play
    onVideoEnd(id) {

        const play = this.state.playlist.map((link, key) => link);
        const current = play[id.key];//New line added
        this.setState({ current });
        play.splice(id.key, 1);

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

    //Shifting the video up in playlist array
    reorderVideoUp(id) {
        if (id.key !== 0) {
            const play = this.state.playlist.map((link, key) => link);
            const upper = play[id.key - 1];
            const lower = play[id.key];
            play[id.key] = upper;
            play[id.key - 1] = lower;
            this.setState({ playlist: play });
        }
    }

    //Shifting the video down in playlist array
    reorderVideoDown(id) {
        const play = this.state.playlist.map((link, key) => link);
        const n = play.length;
        if (id.key !== n - 1) {

            const upper = play[id.key];
            const lower = play[id.key + 1];
            play[id.key] = lower;
            play[id.key + 1] = upper;
            this.setState({ playlist: play });
        }
    }

    reset(){
        this.setState({playlist:[],link:""})
    }
    render() {

        return (
            <div className="landing-grid">
                <Grid>
                    <Cell col={8}>
                        <div className="input-link" >
                            <form onSubmit={this.handleSubmit} >
                               
                                <input placeholder="   Add...." style={{ width: "300px", borderWidth: "2px", height: "2rem",marginBottom:" 3rem",borderBottom:"10px bold" }} type="text" name="ytlink" value={this.state.link} onChange={this.handleChange} ></input>
                                <button type="submit" style={{ borderWidth: "2px", height: "35px", width: "30px" }}><i class="fas fa-plus"></i></button>
                            </form>
                        </div>
                        {/* Child Component */}
                        <Video link={this.state.current} endVideo={this.onEndVideo} />
                    </Cell>

                    <Cell col={4} style={{background:"black",opacity:"0.8",backgroundSize:"cover"}}>
                        <div className="second-col">
                            {/* Child Component  */}
                            <Playlist playlist={this.state.playlist} videoStart={this.onVideoStart} videoEnd={this.onVideoEnd} deleteVideo={this.deleteVideo} reorderVideoUp={this.reorderVideoUp} reorderVideoDown={this.reorderVideoDown} reset={this.reset} />
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;