import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const underline = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  });
  return (
    <nav className="navbar">
      <nav className="logo">
        <img src={require('../photo/planet.png')} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </nav>
      <nav className={`navLink ${isOpen ? 'open' : ''}`}>
        <span><NavLink to="/" style={underline}>Rockets</NavLink></span>
        <span><NavLink to="/missions" style={underline}>Missions</NavLink></span>
        <span><NavLink to="/myprofile" style={underline}>My Profile</NavLink></span>
      </nav>
      <button type="button" className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>
    </nav>
  );
};

export default Navbar;
