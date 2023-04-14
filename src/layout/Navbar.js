import { NavLink } from 'react-router-dom';
import './styles/navbar.css';

const Navbar = () => {
  const underline = ({ isActive }) => ({
    textDecoration: isActive ? 'underline' : 'none',
  });
  return (
    <nav className="navbar">
      <nav className="logo">
        <img src={require('../photo/planet.png')} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </nav>
      <nav className="navLink">
        <span><NavLink to="/" style={underline}>Rockets</NavLink></span>
        <span><NavLink to="/missions" style={underline}>Missions</NavLink></span>
        <span><NavLink to="/myprofile" style={underline}>My Profile</NavLink></span>
      </nav>
    </nav>
  );
};

export default Navbar;
