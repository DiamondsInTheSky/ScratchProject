import React from 'react';


import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navBar">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/login"> Login </NavLink>
      <NavLink to="/signup"> Signup </NavLink>
    </div>
  )
}


module.exports = Navigation;
