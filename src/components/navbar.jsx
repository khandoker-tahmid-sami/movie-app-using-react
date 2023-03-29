import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Navbar =() => {
  return (
    <nav className="navbar navbar-expand-sm">
  <div className="container-fluid">
    <Link className="navbar-brand text-dark " to="/">Vidly</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <div className='navbar-nav'>
        <NavLink className="nav-item nav-link text-dark" to="/movies">Movies</NavLink>
        <NavLink className="nav-item nav-link text-dark" to="/customers">Customers</NavLink>
        <NavLink className="nav-item nav-link text-dark" to="/rentals">Rentals</NavLink>
        <NavLink className="nav-item nav-link text-dark" to="/login">Login</NavLink>
        <NavLink className="nav-item nav-link text-dark" to="/registration">Registration</NavLink>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar