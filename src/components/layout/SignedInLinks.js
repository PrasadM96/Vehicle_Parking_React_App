import React from "react";
import { NavLink } from "react-router-dom";
import fbConfig from "../../config/fbConfig";

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">About Us</NavLink>
      </li>
      <li>
        <button color="darken" onClick={fbConfig.auth().signOut}>
          <NavLink to="/">Log out</NavLink>
        </button>
      </li>

      <li>
        <NavLink to="/" className="btn  btn-floating pink lighten-1">
          M
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
