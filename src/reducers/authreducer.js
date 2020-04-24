import {SIGN_OUT,SIGN_IN} from '../actions/types'
const INITIAL_STATE={
     issignedin:null,
     userid:null
}
export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case SIGN_IN:
        return {...state,issignedin:true , userid:action.payload}
        case SIGN_OUT:
         return {...state,issignedin:false, userid:null}
         default:
          return state;
    }
}
