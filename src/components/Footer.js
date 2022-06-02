import '../styles/Footer.css';
import logo from '../logos/icon-left-font-monochrome-black.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img className="footer-img" src={logo} alt="Logo Groupomania" />
      </Link>
      <ul className="footer-list">
        <a href="http://groupomania.com" target="_blank" rel="noreferrer">
          <li> © Groupomania - 2022</li>
        </a>
        <li>Règles communautaires</li>
        <li>
          <a href="mailto:moderateur@groupomania.com">Contact</a>
        </li>
      </ul>
      <ul className="footer-social">
        <li>
          <a
            href="http://twitter.com/"
            aria-label="Icone réseau social Twitter"
          >
            <i className="social-icon fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="http://instagram.com/"
            aria-label="Icone réseau social Instagram"
          >
            <i className="social-icon fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a
            href="http://linkedin.com/"
            aria-label="Icone réseau social LinkedIn"
          >
            <i className="social-icon fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
