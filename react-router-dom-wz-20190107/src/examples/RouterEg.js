import React,{Component} from 'react';
import {Route,HashRouter,Link,Switch} from 'react-router-dom';
import './index.less';


class RouterEg extends Component{
   state={};
   render(){
      return (
        <HashRouter>
          <div>
            <ul>
                <ListItemLink to='/home'>首页</ListItemLink>
                <ListItemLink to='/user'>用户</ListItemLink>
            </ul>
            <Switch>
            <Route path='/home' render={(props)=><div>home</div>}></Route>
            <Route path='/user' exact render={(props)=><div>user</div>}></Route>
            </Switch>
           
           
          
          </div>
        </HashRouter>
     );
   };
}
export default RouterEg;

const ListItemLink=({to,...rest})=>(
    <Route path={to} 
    children={(props)=>(
        <li className={props.match? 'active':''}> {props.match ? "> " : ""}<Link to={to} {...rest}/></li>
    )}>
      
    </Route>
);

/* 

1、Route最重要的组件，最基本的z就是当location匹配其path时渲染组件
Route渲染的组件最常用 component 指定
还可以用render
const FadingRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <FadeIn>
      <Component {...props}/>
    </FadeIn>
  )}/>
)

<FadingRoute path="/cool" component={Something}/>

用children渲染组件，不管是否匹配path，都会渲染该组件

三种方式不能同时使用

2、path  支持参数，可以精确参数取值
  /:id?  加?是可选参数

<Route path='/user/:id(1|2)' render={(props)=><div>user :{props.match.params.id}</div>}></Route>

path（string）: 路由匹配路径。（没有path属性的Route 总是会 匹配）；
exact（bool）：为true时，则要求路径与location.pathname必须完全匹配；
strict（bool）：true的时候，有结尾斜线的路径只能匹配有斜线的location.pathname；
sensitive: bool


https://reacttraining.com/react-router/web/example/auth-workflow

https://reacttraining.com/react-router/web/example/preventing-transitions

https://reacttraining.com/react-router/web/example/sidebar

*/