import React from 'react';
import Identicon from 'identicon.js';
import dtube from '../dtube.png';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow text-monospace">
      <a
        className="navbar-brand ml-1 col-sm-3 col-md-2 mr-0"
        href="/"
        rel="noopener noreferrer"
      >
        ShareTape
      </a>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap h5 d-none d-sm-none d-sm-block">
          <small className="text-secondary">
            <small id="account">{props.account}</small>
          </small>
          {props.account ? (
            <img
              className="ml-2"
              width="30"
              height="30"
              src={`data:image/png;base64,${new Identicon(
                props.account,
                30
              ).toString()}`}
              alt="DTube account address"
            />
          ) : (
            <span></span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
