import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import Streamlist from './streams/streamlist';
import Streamcreate from './streams/streamcreate';
import Streamedit from './streams/streamedit';
import Streamdelete from './streams/streamdelete';
import Streamshow from './streams/streamshow';
import Header from './header';
import history from '../history'
class App extends React.Component{
    render(){
        return (
            <div className='ui container'>
            
            <Router history={history}>
            <div>
            <Header/>
            <Switch><Route path='/' exact component ={Streamlist}/>
            <Route path='/streams/new' exact component ={Streamcreate}/>
            <Route path='/streams/edit/:id' exact component ={Streamedit}/>
            <Route path='/streams/delete/:id' exact component ={Streamdelete}/>
            <Route path='/streams/:id' exact component ={Streamshow}/></Switch>
            </div>
            </Router>
            </div>
        )
    }
}
export default App;