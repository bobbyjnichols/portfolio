import './style/global.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';
import Home from "./routes/Home/Home";
import GitHub from "./routes/GitHub/GitHub";
import {
  Route,
  HashRouter
} from "react-router-dom";


ReactDOM.render(
     <HashRouter>
       <div className="main-content">
         <Route path="/" component={Header}/>
         <Route exact path="/" component={Home}/>
         <Route path="/github" component={GitHub}/>
       </div>
     </HashRouter>,
    document.getElementById('root')
);