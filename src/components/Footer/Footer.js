import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer">
    <Link to="/mentions">
      <h1 className="footer__title">Mentions légales</h1>
    </Link>
  </div>
);
export default Footer;
