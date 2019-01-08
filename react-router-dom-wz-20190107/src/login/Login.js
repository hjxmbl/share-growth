import React,{Component} from 'react';
import {Button} from 'antd';

class Login extends Component{
   state={};

   login=()=>{
       //根据用户角色跳转不同的路由
       
   }

   render(){
      return (<div>
        <Button onClick={this.login}>登录</Button>
        </div>);
   };
}
export default Login