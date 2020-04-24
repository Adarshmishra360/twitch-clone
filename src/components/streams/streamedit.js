import React from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchstream,editstream} from '../../actions';
import Streamform from './streamform'

class Streamedit extends React.Component{
    componentDidMount(){
        this.props.fetchstream(this.props.match.params.id)
    }
    onSubmit=(formvalues)=>{
     this.props.editstream(this.props.match.params.id,formvalues)
    }
    render(){
        
        if(!this.props.stream){
            return <div>Loading</div>
        }
        return <div>
          <h3>Edit a Stream</h3>
          <Streamform initialValues={_.pick(this.props.stream,'title','description')} onSubmit={this.onSubmit}/>
        </div>
    }
}
    
    

 const mapStateToProps=(state,ownprops)=>{
     return {stream:state.streams[ownprops.match.params.id]}
 }
export default connect(mapStateToProps,{fetchstream,editstream}) (Streamedit);