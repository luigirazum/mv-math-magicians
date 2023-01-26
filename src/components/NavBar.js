import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <li key={id}>
        <NavLink to={path}>
          {text}
        </NavLink>
      </li>
    );
  });

  return (
    <nav>
      <ul>
        {navLinks}
      </ul>
    </nav>
  );
};

export default NavBar;
