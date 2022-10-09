import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid ">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to = '/' >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to = '/about' >{props.content1}</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" >Action</a></li>
            <li><a className="dropdown-item" >Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" >Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">{props.content2}</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" type="checkbox"  role="switch" id="flexSwitchCheckDefault" onChange={props.toggleMode1} />
        <label className="form-check-label  mx-4"  htmlFor="flexSwitchCheckDefault">Enter Dark Mode</label>
      </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-successs bg-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar


// propTypes--> It is used in typechecking of the values we are passing to any particular prop.
// Here it is ensuring that title, content1 and content2 will be string
Navbar.propTypes = {
    title : PropTypes.string,
    content1 : PropTypes.string.isRequired,
    content2 : PropTypes.string
}
//isRequired means we can't leave that without passing any value, it makes mandatory to pass any value else  it will give error.

//defaultProps is used to enter the values if we don't pass values in the app.js component
Navbar.defaultProps = {
    title : "Akash",
    content1 : 'Home',
    content2 : 'About'
}