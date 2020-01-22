import React,{Component} from 'react';
import ReactPlayer from 'react-player';

// Controls the view of playing video
class Video extends Component{

    render(){
        return(
            <div style={{marginLeft:"1rem"}}>
            <ReactPlayer  onEnded={()=>this.props.endVideo()}  url={this.props.link.url} height={650} width={"100%"} display="false" controls="true" playing/>
            </div>
                           
        );
    }
}

export default Video;