//const test = require('./src/js/test');
//console.log(test);
//告诉 webpack，请懒加载 test.js，
// require.ensure([], function() {
//     const data = require('./src/js/test');
//     p.innerHTML = data;
//   })
/**
 * 异步加载 打包后会出现一个新的js文件（假设叫0.7f0a.js） 说明代码是被分割了的，只要当对应的条件触发时，浏览器才会去加载指定的资源。而无论之后我们点击多少次，0.7f0a.js 文件都不会重复加载，
 */
//异步加载相关代码
const p = document.querySelector('.p');
const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
  //只有触发事件才加载再对应的js 也就是异步加载 
 // require.ensure([], function() {
    // const data = require('./src/js/test');
    // require('./src/js/test2');
 // })
  import(/* webpackChunkName: 'test'*/ "./src/js/test").then(function(data) {
  p.innerHTML = data.default;
  });
 
})