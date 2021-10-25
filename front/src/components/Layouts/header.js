import React, { Fragment, useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import axios from 'axios'

const Header = () => {
  const [user, setUser] = useState([]);


  useEffect(() => {

    if(localStorage.usertoken) {
      axios.get('/server/api/cabinet/user-data', { headers: { Authorization: `Bearer ${localStorage.usertoken}` }} )
        .then(res => {
          setUser(res.data.name); 
        })
        .catch( err => { 
          setUser(''); 
          localStorage.removeItem('usertoken')
        })
    } else { localStorage.removeItem('usertoken') }
  }, [])

  const logOut = (e) => {
    e.preventDefault();
      window.location.href = "/login";
      localStorage.removeItem('usertoken')
    }

  return (
   <Fragment>
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand font-weight-bold text-danger" to="/">OnlineFood</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/products">Products</NavLink>
            </li>
            {user.length !== 0 ? 
              <Fragment>
                <li className="nav-item border-left">
                  <NavLink to="/cabinet">{user}</NavLink>
                </li>
                <li className="nav-item border-left">
                  <NavLink to="/login" onClick={logOut} className="text-danger">Eșire</NavLink>
                </li>
              </Fragment>
              :
              <Fragment>
                <li className="nav-item border-left">
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register">Register</NavLink>
                </li>
              </Fragment>
            }
           
          </ul>
        </div>
      </div>
    </nav>
   </Fragment>
  )
}

export default withRouter(Header)