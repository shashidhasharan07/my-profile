import React from 'react';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2>Shashidhar Sharan</h2>
      <div>
        <a href="#about">About</a> | 
        <a href="#skills">Skills</a> | 
        <a href="#education">Education</a> | 
        <a href="#experience">Experience</a> | 
        <a href="#projects">Projects</a> | 
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#333',
    color: 'white'
  }
};

export default Navbar;
