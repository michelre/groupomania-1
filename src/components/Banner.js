import logo from '../logos/icon-left-font-monochrome-white.png';
import '../styles/Banner.css';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <header className="banner">
      <Link to="/">
        <img className="banner-img" src={logo} alt="Logo Groupomania" />
      </Link>
      <h1 className="banner-title">Votre réseau social d'entreprise</h1>
    </header>
  );
}
