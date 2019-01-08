
文档地址  https://reacttraining.com/react-router/web/guides/quick-start

一、react-router-dom 和 react-router的区别

react-router: 实现了路由的核心功能  Switch,Router
react-router-dom: 基于react-router，加入了在浏览器运行环境下的一些功能，例如：Link组件，会渲染一个a标签，Link组件源码a标签行; BrowserRouter和HashRouter组件，前者使用pushState和popState事件构建路由，后者使用window.location.hash和hashchange事件构建路由。
react-router-native: 基于react-router，类似react-router-dom，加入了react-native运行环境下的一些功能。


二、react-router-dom基本用法  （BasicRouter）

三、Link NavLink（LinkEg）

四、Router (RouterEg)

五、同一路由渲染不同效果(ModalGallery)

六、WithRouter

七、path-to-regexp  框架用来做路径匹配
