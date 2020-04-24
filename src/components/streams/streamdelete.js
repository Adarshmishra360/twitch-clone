import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Modal from '../modal';
import history from '../../history';
import {fetchstream,deletestream} from '../../actions'

class Streamdelete extends React.Component{

 componentDidMount(){
    this.props.fetchstream( this.props.match.params.id)
 }

   rendercontent=()=>{
       if(!this.props.stream){
           return 'Are you sure you want to delete this stream?'
       }
        return `Are you sure you want to delete the stream of title: ${this.props.stream.title}`
   }
    
    renderactions=()=>{
        return <React.Fragment><button onClick={()=>this.props.deletestream(this.props.match.params.id)} className='ui primary button'>Delete</button>
        <Link to='/' className='ui button'>Cancel</Link> 
        </React.Fragment>}
    
    render(){
    return (<Modal 
        header='Delete stream'
        content={this.rendercontent()}
        action={this.renderactions()}
        onDismiss={ ()=> history.push('/')}
        />)
    
}
}
 const mapStateToProps=(state,ownprops)=>{
     return {stream:state.streams[ownprops.match.params.id]}
 }
export default connect(mapStateToProps,{fetchstream,deletestream})(Streamdelete) ;