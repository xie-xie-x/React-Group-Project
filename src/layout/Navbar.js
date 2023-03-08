import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <nav className="logo">
      <img src={require('../photo/planet.png')} alt="logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </nav>
    <nav className="navLink">
      <span><Link to="/">Rockets</Link></span>
      <span><Link to="/missions">Missions</Link></span>
      <span><Link to="/myprofile">My Profile</Link></span>
    </nav>
  </nav>
);

export default Navbar;
