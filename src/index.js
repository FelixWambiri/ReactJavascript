import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

var destination = document.querySelector("#container");

ReactDOM.render(
<div>
    <TodoList/>
</div>,
destination

/* <App />, document.getElementById('root')); */
// registerServiceWorker();
);