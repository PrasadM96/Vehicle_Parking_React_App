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
        <NavLink
          to="/signin"
          onClick={() => {
            fbConfig.auth().signOut();
          }}
        >
          Log out
        </NavLink>
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
