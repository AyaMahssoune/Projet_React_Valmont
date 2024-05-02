import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <div className="flex-fill">
      <NavLink to="/">
        <img
          src={logo}
          alt="Valmont -Les soins Valmont pour le corps et les cheveux"
        />
      </NavLink>
    </div>
  );
};

export default Logo;
