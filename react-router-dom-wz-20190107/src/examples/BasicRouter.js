import React,{Component,Fragment} from 'react';
import {Switch,HashRouter,Route,Redirect} from 'react-router-dom';

const Home=(props)=>{
    console.log(props)
    return <div>home</div>;
}

const B = ()=><div>B</div>;
const C = (props)=>{
    console.log(props);
    return <div>C</div>;
}


class BasicRouter extends Component{
   state={};

   render(){
       let location = this.props.location;
      
      return (<HashRouter>
        
           <div>
            <Switch >
                <Route path='/b' component={B} exact></Route>
                <Route path='/home' component={Home} exact ></Route>
                <Route path='/c' component={C} ></Route>
                <Redirect to='/home'></Redirect>
               {/*  <Route path='/home' component={B} exact></Route>
                <Route path='/home' component={Home} exact ></Route>
                <Route path='/home/C' component={C} ></Route>
                <Redirect to='/home'></Redirect> */}
            </Switch> 
           </div>
         
         
        </HashRouter>);
   };
}
export default BasicRouter;


/*
HashRouter指定了路由模式为hash模式，hash就是url中#号及后面的字符，
hash值的变化不会导致浏览器向服务发起请求，而会触发hashchange事件

window.location.hash='/home' //设置url的hash,url为localhost:3000/#/home
window.addEventListener('hashchange',function(){
    //监听hash变化,当点击浏览器前进后退时也会触发
})

HashRouter只允许包含一个子节点
HashRouter提供给其component三个属性：history/location/match
 
Route按顺序匹配 home和B都会匹配
Switch 会顺序匹配第一个匹配当前路由路由的Route或Redirect，只会渲染一个匹配项
switch支持location属性：A location object to be used for matching children elements instead of the current history location (usually the current browser URL).

exact（bool）：为true时，要求路径与location.pathname必须完全匹配；

*/