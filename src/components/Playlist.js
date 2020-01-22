import React,{Component} from 'react';
import {List,ListItem,ListItemContent} from 'react-mdl';
import ReactPlayer from 'react-player';


class Playlist extends Component {


    render(){
        return(
            <div className="playlist-grid">
            <h2 style={{margin:"30px",fontWeight:"bold",color:"white"}}>Playlist <span style={{marginLeft:"4px",fontSize:"40px"}}><i class="fas fa-music"></i></span></h2>
            <hr style={{ borderTop:"5px solid red",width:"70%"}}/>
            
               <List >{   
                    
                    this.props.playlist.map( (link,key) => {
                       
                        return<ListItem style={{marginLeft:"5%",marginBottom:"4px",height:"10%",width:"80%",opacity:"0.8" }}>
                             <button className="icon" onClick={()=>this.props.deleteVideo({key})}><i class="fas fa-minus"></i></button>
                            <ListItemContent>
                          
                             <div key={key} > 
                            
                            <ReactPlayer onStart={()=>this.props.videoEnd({key})}   onEnded={()=>this.props.videoEnd({key})} className="myvideo" url={link.url} height={80} width={300} controls="true" playing={false}/>
                           
                            </div>
                            </ListItemContent>
                            
                            <button className="icon-up" onClick={()=>this.props.reorderVideoUp({key})}><i class="fas fa-arrow-up"></i></button>  
                            <button className="icon-down" onClick={()=>this.props.reorderVideoDown({key})}><i class="fa fa-arrow-down"></i></button>  
                            </ListItem>
                    })
                }
                </List> 

            </div>
             )
         }
}
export default Playlist;