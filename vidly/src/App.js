import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Customer from './componets/customer';
import { Redirect, Route, Switch } from 'react-router-dom';
import Movies from './componets/movie';
import Rental from './componets/rental';
import NotFound from "./componets/notFound"
import NavBar from './componets/navBar';
import LoginForm from './componets/loginForm';
import Register from './register';

function App() {
  return (
    <div>
      <NavBar className="dark"/>
    <main className="background"> 
    
    <Switch>
    <Route path="/movie" component={Movies}></Route>
      <Route path="/customer" component={Customer}></Route>
      <Route path="/rental" component={Rental}></Route>
      <Route path="/notFound" component={NotFound}></Route>
      <Route path="/loginForm" component ={LoginForm}></Route>
      <Route path="/register" component = {Register}></Route>
      <Redirect from="/" exact to="/movie"></Redirect>
      
      <Route to="/not-found"></Route>
    </Switch>
    
      

      
    </main>
    </div>
  );
}

export default App;
