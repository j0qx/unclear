import './Header.css';
import Unclear from '../../assets/img/logo_unclear.png'
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
  <div className="header"> 
      <div className="dropdown">
        <h1 className="header__title">Association<i class="arrow__right"></i></h1>
        <div className="dropdown-content">
        <span className="menu-item"><Link to="/association/adhesion">Adhésion</Link></span>
        <span className="menu-item"><Link to="/association/presentation">Présentation</Link></span>
        <span className="menu-item"><Link to="/association/info">Informations</Link></span>
        </div>
      </div>
    <NavLink to="/news" activeClassName="active">
      <h1 className="header__title">News</h1>
    </NavLink>
    <NavLink to="/">
      <img src={Unclear} className="unclear" alt={Unclear} />
    </NavLink>
    <NavLink to="/news" activeClassName="active">
      <h1 className="header__title">Tournois</h1>
    </NavLink>
    <NavLink to="/contact">
      <h1 className="header__title">Contact</h1>
    </NavLink>
  </div>
);
export default Header;
