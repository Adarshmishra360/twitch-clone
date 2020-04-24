import React from 'react';

import {connect} from 'react-redux';
import {Createstream} from '../../actions';
import Streamform from './streamform'

class Streamcreate extends React.Component{
     
    
    onSubmit=(formvalues)=>{
        
       
       this.props.Createstream(formvalues);
    }
   render(){
       
       return (
           <div>
           <h3>Create a Form</h3>
           <Streamform   onSubmit={this.onSubmit}/>
           </div>
          
       )
   }
}
 


export default connect(null,{Createstream})(Streamcreate)