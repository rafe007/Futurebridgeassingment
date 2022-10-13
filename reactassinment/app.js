import React from 'react';  
import ReactDOM from 'react-dom'; 

import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom' 


import Movies from './movie';
import Home from './home';

const App = () => {
    return <BrowserRouter>
    <ul>  
        <li>  
          <NavLink to="/" exact >Home</NavLink>  
        </li>  
        
        <li>  
          <NavLink to="/movies" exact>Movies</NavLink>  
        </li>  
      </ul>  
      <Switch>  
         <Route exact path="/" component={Home} />  
         <Route path="/movies" component={Movies} />  
           
      </Switch>  
    </BrowserRouter>
}

ReactDOM.render(App, document.getElementById('root'));  