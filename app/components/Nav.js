import React from "react";
import { NavLink } from "react-router-dom";
import { func } from "prop-types";

const activeStyle = {
  color: "rgb(187, 26, 31)",
};
// added nav styles using bootstrap
export default function Nav() {
  return (
    <div>
      <ul className="d-flex list-group flex-row justify-content-center my-4">
        <li className="list-group-item mx-3 border-0">
          <NavLink
            className="fs-4 btn btn-light text-decoration-none"
            exact
            to="/"
            activeStyle={activeStyle}
          >
            Top
          </NavLink>
        </li>
        <li className="list-group-item mx-3 border-0">
          <NavLink
            className=" fs-4 btn btn-light text-decoration-none"
            to="/new"
            activeStyle={activeStyle}
          >
            New
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
