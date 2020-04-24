import {SIGN_IN,
    SIGN_OUT,
    CREATE_STREAM,
    FETCH_STREAMS,
 FETCH_STREAM ,
 DELETE_STREAM,
 EDIT_STREAM 
    } from './types'
import stream from '../api/stream';
import history from '../history'


export const  Signin=(userid)=>{
    return{
        type:SIGN_IN,
        payload:userid
    }
}
export const Signout=()=>{
    return{
        type:SIGN_OUT
    }
}
export const Createstream =formValues=> async (dispatch,getState)=>{
    const {userid}=getState().auth;
   const response=  await stream.post('/streams',{...formValues,userid})
   dispatch ({type:CREATE_STREAM,payload:response.data})
   history.push('/')
    }

    export const fetchstreams =()=> async dispatch=>{
    
        const response=  await stream.get('/streams')
        dispatch ({type:FETCH_STREAMS,payload:response.data})
         }

         export const fetchstream =(id)=> async dispatch=>{
    
            const response=  await stream.get(`/streams/${id}`)
            dispatch ({type:FETCH_STREAM,payload:response.data})
             }
             export const editstream =(id,formValues)=> async dispatch=>{
    
                const response=  await stream.patch(`/streams/${id}`,formValues)
                dispatch ({type:EDIT_STREAM,payload:response.data})
                history.push('/')
                 }
                 export const deletestream =(id)=> async dispatch=>{
    
                      await stream.delete(`/streams/${id}`)
                    dispatch ({type:DELETE_STREAM,payload:id})
                    history.push('/')
                     }
