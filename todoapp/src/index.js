import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var tasklist=["task1","task2"];

var tasks = localStorage.getItem('storedTasks');
if(tasks){
    tasklist = JSON.parse(tasks);

}

ReactDOM.render(
    
    <App tasks ={tasklist} />
    , document.getElementById('root'));

serviceWorker.unregister();
