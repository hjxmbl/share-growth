import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components
function Setting() {
  return <h2>系统设置</h2>;
}

function User({ routes }) {
  return (
    <div>
     
      <ul style={{float:'left', listStyleType: "none",width:200}}>
        <li>
          <Link to="/user/person">个人中心</Link>
        </li>
        <li>
          <Link to="/user/common">通用设置</Link>
        </li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))}
    </div>
  );
}

function Person() {
  return <h3>个人中心</h3>;
}

function Common() {
  return <h3>通用设置</h3>;
}

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: "/setting",
    component: Setting
  },
  {
    path: "/user",
    component: User,
    routes: [
      {
        path: "/user/person",
        component: Person
      },
      {
        path: "/user/common",
        component: Common
      }
    ]
  }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

function RouteConfigExample() {
  return (
    <Router>
      <div>

        <ul style={{ listStyle: 'none',background: '#ccc'}}>
          <li style={{display:'inline',padding:5}}>
            <Link to="/user">用户设置</Link>
          </li>
          <li style={{display:'inline'}}>
            <Link to="/setting">系统设置</Link>
          </li>
        </ul>

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
}

export default RouteConfigExample;