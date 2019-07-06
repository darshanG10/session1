import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
 
import {BrowserRouter as Router,Route,Link,browserHistroy,Switch } from 'react-router-dom';
import  One from './One';
import  Two from './Two';
import NoMatch from './NoMatch';
import Twopointone from './Twopointone';

import Three from './Three';

ReactDOM.render(

 

<Router history="browserHistory">
<Switch>
<Route path="/" component={App} exact></Route>

<Route path="/One" component={One}></Route>

<Route path="/Two" component={Two}>
<Route path="/Two/:id" component={Twopointone}>


</Route>

</Route>
<Route path="/Three" component={Three}></Route>

<Route path="*" component={NoMatch} ></Route>
</Switch>

</Router>




, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
