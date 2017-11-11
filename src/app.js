import './style/global.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './components/Logo/Logo';

ReactDOM.render(
   <div id={root}>
     <Logo />
     <h4>test 2</h4>
     <p>test 3</p>
   </div>,
    document.getElementById('root')
);