import React from 'react';
import { NavLink } from 'react-router-dom';

// import styles module
import nbstyles from './NavBar.module.css';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: 'calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: 'quote',
      text: 'Quote',
    },
  ];

  const navLinks = links.map((link) => {
    const { id, path, text } = link;
    return (
      <li key={id} className={nbstyles.li}>
        <NavLink to={path} exact="true" className={nbstyles.links}>
          {text}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul className={nbstyles.ul}>
        {navLinks}
      </ul>
    </nav>
  );
};

export default NavBar;
