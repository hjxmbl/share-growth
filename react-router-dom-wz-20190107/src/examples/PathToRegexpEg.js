import pathToRegexp from "path-to-regexp";
import React,{Component} from 'react';

class PathToRegexpEg extends Component{
   state={};
   render(){
    let regexp = pathToRegexp('/foo/:bar')
    console.log(regexp);  
    let match1 = regexp.exec('/test/route');   
    let match2 = regexp.exec('/foo/route');   

    console.log(`match1 :${match1}`);
    console.log(`match2 :${match2}`);
    console.log(match2);

    let keys=[];
    let reg2= pathToRegexp('/user/:id',keys,{end:true});
    console.log('reg2');
    console.log(reg2);
    console.log('keys');
    console.log(keys);
    console.log(reg2.test('/user'));
    console.log(reg2.test('/user/1'));

  
      return (<div>
        PathToRegexpEg
        </div>);
   };
}
export default PathToRegexpEg;