import React from 'react';
import {connect} from 'react-redux';
import {Signin,Signout} from '../actions'
class Googleauth extends React.Component{
    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'154284205920-llq4lgntt3ig80te3uuodsi929e2k0fg.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
               this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onAuthChange=(issignedin)=>{
       if(issignedin){
           this.props.Signin(this.auth.currentUser.get().getId());
       }else{
           this.props.Signout();
       }
    }
       onSignOutClick=()=>{
           this.auth.signOut();
       }
       onSignInClick=()=>{
           this.auth.signIn();
       }
      renderAuthButton(){
          if(this.props.issignedin===null){
              return null;
          }
          else if(this.props.issignedin){
              return (
                  <button onClick={this.onSignOutClick} className='ui red google button'>
                  <i icon='google icon'/>
                  Sign Out
                  </button>
              )
          }
          else{
              return (
                <button  onClick={this.onSignInClick} className='ui green google button'>
                <i icon='google icon'/>
                Sign in with Google
                </button>
              )
          }
      }
    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{issignedin:state.auth.issignedin};
}
export default  connect(mapStateToProps,{Signin,Signout})(Googleauth);