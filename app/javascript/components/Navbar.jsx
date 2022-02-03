import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () =>{

	return(

		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid d-flex justify-content-center">
			  	<NavLink to="/" className="navbar-brand mb-0 h1 text-primary">
			  		To-Do Lists
			    </NavLink>
			</div>
		</nav>

		)
}

export default Navbar