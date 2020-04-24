import React from 'react';
import {connect} from 'react-redux';
import flv from 'flv.js';
import {fetchstream} from '../../actions'

class Streamshow extends React.Component{
    constructor(props){
        super(props)
        this.videoRef=React.createRef();
    }
    componentDidMount(){
        this.props.fetchstream(this.props.match.params.id)
        this.buildplayer();
       
    }
    componentWillUpdate(){
        this.buildplayer();
    }
    componentWillUnmount(){
        this.player.destroy();
    }
    buildplayer(){
        if(this.player || !this.props.stream){
            return;
        }
        this.player =flv.createPlayer({
            type:'flv',
            url:`http://localhost:8000/live/${this.props.match.params.id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()

    }
    render(){
        
         if(!this.props.stream){
                return <div>Loading...</div>
            }
            return (
                <div>
                <video ref={this.videoRef} style={{width:'100%'}} controls/>
                <h2>{this.props.stream.title}</h2>
                <h5>{this.props.stream.description}</h5>
                </div>
            )
        }
        
    }

 
   
const mapStateToProps=(state,ownprops)=>{
    return{stream:state.streams[ownprops.match.params.id]}
}
export default connect(mapStateToProps,{fetchstream})(Streamshow);