import React, { Component } from 'react';
import { List, ListItem, ListItemContent } from 'react-mdl';
import ReactPlayer from 'react-player';


// Controls the view of songs added to the playlist.
class Playlist extends Component {


    render() {
        return (

            <div className="playlist-grid">

                {/* Playlist heading */}
                <h2 style={{ margin: "30px", fontWeight: "bold", color: "white" }}>Playlist
                    <span style={{ marginLeft: "10px", fontSize: "38px" }}><i class="fas fa-music"></i></span>

                    <span style={{ float: "right", fontSize: "0px" }}><button onClick={this.props.reset} 
                    style={{ background: "black", color: "white", fontSize: "30px", border: "black" }}><i class="fas fa-trash"></i></button></span>
                </h2>
                <hr style={{ borderTop: "5px solid red", width: "70%" }} />

                {/* listing all the songs in playlist  */}
                <List >{
                    this.props.playlist.map((link, key) => {

                        return <ListItem style={{ marginBottom: "4px", height: "10%", width: "80%", opacity: "0.8" }}>
                            <button style={{ background: "black", color: "white", fontSize: "20px", border: "black" }} className="icon" onClick={() => this.props.deleteVideo({ key })}><i class="fas fa-times"></i></button>
                            <ListItemContent>
                                <div key={key} >
                                    <ReactPlayer onStart={() => this.props.videoEnd({ key })} onEnded={() => this.props.videoEnd({ key })} className="myvideo" url={link.url} height={80} width={200} controls="true" playing={false} />
                                </div>
                            </ListItemContent>
                            <button style={{ marginLeft: "10px", background: "black", color: "white", fontSize: "20px", border: "black" }} className="icon-up" onClick={() => this.props.reorderVideoUp({ key })}><i class="fas fa-arrow-up"></i></button>
                            <button style={{ background: "black", color: "white", fontSize: "20px", border: "black" }} className="icon-down" onClick={() => this.props.reorderVideoDown({ key })}><i class="fa fa-arrow-down"></i></button>
                        </ListItem>
                    })                    
                }
                </List>
            </div>
        )
    }
}
export default Playlist;