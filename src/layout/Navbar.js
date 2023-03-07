import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <nav className="navLink">
      <span><Link to="/">Rockets</Link></span>
      <span><Link to="/missions">Missions</Link></span>
      <span><Link to="/myprofile">My Profile</Link></span>
    </nav>
  </nav>
);

export default Navbar;
