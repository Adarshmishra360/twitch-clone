import React from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom'
import {fetchstreams} from '../../actions'
import stream from '../../api/stream';

class Streamlist extends React.Component{
    componentDidMount(){
        this.props.fetchstreams();
    }

     renderadmin=(stream)=>{
       if(stream.userid===this.props.currentuserid){
           return (
               <div className='right floated content'>
               <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>EDIT</Link>
               <Link  to={`/streams/delete/${stream.id}`} className='ui button negative'>DELETE</Link>
               </div>
           )
       }
     }
     rendercreate=()=>{
         return(
             <div style={{textAlign:'right'}}>
             <Link to='/streams/new' className='ui button primary'>Create Stream</Link>
             </div>
         )
     }

    
   renderlist=()=>{
       return this.props.streams.map(stream=>{
           return (
            <div className='item' key={stream.id}>
            {this.renderadmin(stream)}
            <i className='large middle aligned icon camera'/>
            <div className='content'>
           <Link to={`/streams/${stream.id}`} className='header'> {stream.title}</Link>
            <div className='description'>{stream.description}</div>
           
            </div>
            </div>
           )
       }
        
        )
       
   }

   render(){
       
       return(
           <div >
           <h2>Streams</h2>
           <div className='ui celled list'>{this.renderlist()}</div>
           {this.rendercreate()}
           
           </div>
       )
   }
}
  const mapStateToProps=(state)=>{
      return {streams:Object.values(state.streams),
              currentuserid:state.auth.userid ,
              issignedin:state.auth.issignedin 
    }
  }
export default connect(mapStateToProps,{fetchstreams}) (Streamlist);