import React from "react";
import './Navbar.css';

const Navbar = (props) =>(
  <ul className="nav nav-fill">
    <li className="nav-item">
      <a className="nav-link active" href="/">Clicky Game</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="">{props.gameNote}</a>

    </li>
    <li className="nav-item">
      <a className="nav-link" href="">Score: {props.score} | Top Score: {props.highScore}</a>

    </li>

  </ul>
);

export default Navbar;