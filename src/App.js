import React from "react"
import Navbar from './components/navbar';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from "./components/Movies"
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import Registration from "./components/registrationForm"
import './App.css';



function App() {
  return (
    <React.Fragment>
        <Navbar></Navbar>
      <div className='content'>
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/login" component={LoginForm} />
          <Route path="/registration" component={Registration} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from='/' exact to="/movies"/>
          <Redirect to="not-found"/>
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default App;
