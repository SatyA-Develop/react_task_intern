import "./Navbar.css";
import navbarTag from "./Navbartags";
import logo from '../../img/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-lists">
      {navbarTag.map(({ icon, name }) => {
        return (
          <div className="nav-tag">
            <img src={icon} alt={name} className="nav-img" />
            <span className="nav-tag-text">{name}</span>
          </div>
        );
      })}
    </div>
    </div>
    
  );
};

export default Navbar;
