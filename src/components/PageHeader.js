import React from 'react';

// import styles module
import phstyles from './PageHeader.module.css';

// Add the NavBar to the Header
import NavBar from './NavBar';

const PageHeader = () => (
  <div>
    <header className={phstyles.header}>
      <h1 className={phstyles.h1}>Math Magicians</h1>
      <NavBar />
    </header>
  </div>
);

export default PageHeader;
