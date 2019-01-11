import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';

class Header extends Component{
   state={};
   render(){
       console.log(this.props);
      return (<div>
          <span onClick={()=>{this.props.history.push('/home')}}>Logo</span>
        <ul>
            <li><Link to='/home'>首页</Link></li>
            <li><Link to='/user'>用户</Link></li>
        </ul>
        </div>);
   };
}
export default withRouter(Header)