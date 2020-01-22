(this.webpackJsonpplaylistr=this.webpackJsonpplaylistr||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(5),l=n.n(r),o=(n(51),n(52),n(10)),s=n(11),c=n(13),d=n(12),u=n(6),h=n(14),p=n(8),m=n(21),y=n.n(m),b=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"playlist-grid"},i.a.createElement("h2",{style:{margin:"30px",fontWeight:"bold",color:"white"}},"Playlist",i.a.createElement("span",{style:{marginLeft:"10px",fontSize:"38px"}},i.a.createElement("i",{class:"fas fa-music"})),i.a.createElement("span",{style:{float:"right",fontSize:"0px"}},i.a.createElement("button",{onClick:this.props.reset,style:{background:"black",color:"white",fontSize:"30px",border:"black"}},i.a.createElement("i",{class:"fas fa-trash"})))),i.a.createElement("hr",{style:{borderTop:"5px solid red",width:"70%"}}),i.a.createElement(p.List,null,this.props.playlist.map((function(t,n){return i.a.createElement(p.ListItem,{style:{marginBottom:"4px",height:"10%",width:"80%",opacity:"0.8"}},i.a.createElement("button",{style:{background:"black",color:"white",fontSize:"20px",border:"black"},className:"icon",onClick:function(){return e.props.deleteVideo({key:n})}},i.a.createElement("i",{class:"fas fa-times"})),i.a.createElement(p.ListItemContent,null,i.a.createElement("div",{key:n},i.a.createElement(y.a,{onStart:function(){return e.props.videoEnd({key:n})},onEnded:function(){return e.props.videoEnd({key:n})},className:"myvideo",url:t.url,height:80,width:200,controls:"true",playing:!1}))),i.a.createElement("button",{style:{marginLeft:"10px",background:"black",color:"white",fontSize:"20px",border:"black"},className:"icon-up",onClick:function(){return e.props.reorderVideoUp({key:n})}},i.a.createElement("i",{class:"fas fa-arrow-up"})),i.a.createElement("button",{style:{background:"black",color:"white",fontSize:"20px",border:"black"},className:"icon-down",onClick:function(){return e.props.reorderVideoDown({key:n})}},i.a.createElement("i",{class:"fa fa-arrow-down"})))}))))}}]),t}(a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{marginLeft:"1rem"}},i.a.createElement(y.a,{onEnded:function(){return e.props.endVideo()},url:this.props.link.url,height:650,width:"100%",display:"false",controls:"true",playing:!0}))}}]),t}(a.Component),k=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={current:"",link:"",playlist:[]},n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(u.a)(n)),n.onVideoEnd=n.onVideoEnd.bind(Object(u.a)(n)),n.deleteVideo=n.deleteVideo.bind(Object(u.a)(n)),n.onEndVideo=n.onEndVideo.bind(Object(u.a)(n)),n.reorderVideoUp=n.reorderVideoUp.bind(Object(u.a)(n)),n.reorderVideoDown=n.reorderVideoDown.bind(Object(u.a)(n)),n.reset=n.reset.bind(Object(u.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState({link:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.state.link;if(t.includes("www.youtube.com")){if(void 0!=t||""!=t){var n=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/);if(n&&11==n[2].length){var a=this.state.playlist.map((function(e,t){return e})),i={url:t,isOn:!1};a.push(i),this.setState({playlist:a}),this.setState({link:" "})}else alert("Please Check the Url again!")}}else alert("Please Check the Url again!");e.preventDefault()}},{key:"onVideoEnd",value:function(e){var t=this.state.playlist.map((function(e,t){return e})),n=t[e.key];this.setState({current:n}),t.splice(e.key,1),this.setState({playlist:t})}},{key:"deleteVideo",value:function(e){console.log("index= "+e.key);var t=this.state.playlist.map((function(e,t){return e}));console.log(t[0]),console.log(t[1]),console.log("index= "+e.key),t.splice(e.key,1),console.log(t),this.setState({playlist:t})}},{key:"onEndVideo",value:function(){var e=this.state.playlist.map((function(e,t){return e}));if(0!==e.length){var t=e[0];e.shift(),this.setState({current:t,playlist:e})}else this.setState({current:""})}},{key:"reorderVideoUp",value:function(e){if(0!==e.key){var t=this.state.playlist.map((function(e,t){return e})),n=t[e.key-1],a=t[e.key];t[e.key]=n,t[e.key-1]=a,this.setState({playlist:t})}}},{key:"reorderVideoDown",value:function(e){var t=this.state.playlist.map((function(e,t){return e})),n=t.length;if(e.key!==n-1){var a=t[e.key],i=t[e.key+1];t[e.key]=i,t[e.key+1]=a,this.setState({playlist:t})}}},{key:"reset",value:function(){this.setState({playlist:[],link:""})}},{key:"render",value:function(){return i.a.createElement("div",{className:"landing-grid"},i.a.createElement(p.Grid,null,i.a.createElement(p.Cell,{col:8},i.a.createElement("div",{className:"input-link"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{placeholder:"   Add....",style:{width:"300px",borderWidth:"2px",height:"2rem",marginBottom:" 3rem",borderBottom:"10px bold"},type:"text",name:"ytlink",value:this.state.link,onChange:this.handleChange}),i.a.createElement("button",{type:"submit",style:{borderWidth:"2px",height:"35px",width:"30px"}},i.a.createElement("i",{class:"fas fa-plus"})))),i.a.createElement(f,{link:this.state.current,endVideo:this.onEndVideo})),i.a.createElement(p.Cell,{col:4,style:{background:"black",opacity:"0.8",backgroundSize:"cover"}},i.a.createElement("div",{className:"second-col"},i.a.createElement(b,{playlist:this.state.playlist,videoStart:this.onVideoStart,videoEnd:this.onVideoEnd,deleteVideo:this.deleteVideo,reorderVideoUp:this.reorderVideoUp,reorderVideoDown:this.reorderVideoDown,reset:this.reset})))))}}]),t}(a.Component);var v=function(){return i.a.createElement("div",null,i.a.createElement(k,null))};n(107),n(108),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},46:function(e,t,n){e.exports=n(109)},51:function(e,t,n){},52:function(e,t,n){}},[[46,1,2]]]);
//# sourceMappingURL=main.89fb60ff.chunk.js.map