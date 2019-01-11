import React,{Component} from 'react';
import {Switch,HashRouter,Route,Link,NavLink,BrowserRouter} from 'react-router-dom';

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About(props) {
      console.log(props);
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  
  function Topics() {
    return (
      <div>
        <h2>Topics</h2>
      </div>
    );
  }
  
class LinkEg extends Component{
   state={};
   render(){
      return (<BrowserRouter>
          <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to={{pathname: "/about/",
                                search: "?sort=name",
                                hash: "#the-hash",
                                state: { fromDashboard: true }
                    }}>About</Link>
                </li>
                <li>
                    <Link to="/topics" replace>Topics</Link>
                </li>
               {/*  <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/topics">Topics</NavLink>
                </li> */}

            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
          </div>
          
        
        </BrowserRouter>);
   };
}
export default LinkEg;

/**
 Link会根据当前使用的路由HashRouter还是BrowserRouter解析成a标签<a href=""></a>
 to指定跳转路由  replace
 
 NavLink 为选中的标签添加了样式active 
 activeClassName可以指定选中样式类名
 activeStyle={{color:red}}
 exact 严格匹配当前路由时才会添加选中样式
 * 
 */