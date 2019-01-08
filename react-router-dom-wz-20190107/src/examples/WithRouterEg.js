import React,{Component} from 'react';
import {HashRouter ,Route,Switch} from 'react-router-dom';
import Header from './Header';

class WithRouterEg extends Component{
   state={};

   
   render(){
      return (<HashRouter>
        <div>
          <Header/>
          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/user' component={User}></Route>
          </Switch>
        </div>
        
        </HashRouter>);
   };
}
export default WithRouterEg;

const Home=(props)=>{
  return <div>home</div>;
}

const User = ()=><div>user</div>;