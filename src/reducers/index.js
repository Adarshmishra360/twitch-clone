import {combineReducers} from 'redux';
import {reducer as formreducer} from 'redux-form'
import Authreducer from './authreducer';
import streamreducer from './streamreducer'
export default combineReducers ({
    auth:Authreducer,
    form:formreducer,
    streams:streamreducer
})