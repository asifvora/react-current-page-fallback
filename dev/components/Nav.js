import * as React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
        <Link to="/contact">Contact</Link>
    </>
  );
};

export default Nav;
