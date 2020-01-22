import React,{Component} from 'react';
import ReactPlayer from 'react-player';

class Video extends Component{

    render(){
        return(
            <div style={{marginLeft:"6rem"}}>
            <ReactPlayer  onEnded={()=>this.props.endVideo()}  url={this.props.link.url} height={400} width={700} display="false" controls="true" playing/>
            </div>
                           
        );
    }
}

export default Video;