import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar-container">
        <div className="logo">
          <NavLink to="/">
            <h1>
              Movie <span>Hub</span>
            </h1>
          </NavLink>
        </div>
        <div className="navbar">
          <div className="nav-link">
            <ul>
              <li>
                <NavLink activeClassName="active" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movie/tt3896198">Movie Detail</NavLink>
              </li>
            </ul>
          </div>
          <div className="user">
            <button>Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
