import '../styles/Footer.css';
import logo from '../logos/icon-left-font-monochrome-white.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img className="footer-img" src={logo} alt="Logo Groupomania" />
      </Link>
      <ul className="footer-list">
        <li> © Groupomania - 2022</li>
        <li>Règles communautaires</li>
        <li>
          <a href="mailto:moderateur@groupomania.com">Contact</a>
        </li>
      </ul>
    </footer>
  );
}
