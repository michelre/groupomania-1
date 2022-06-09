import '../styles/Nav.css';
import { Link } from 'react-router-dom';

export default function Nav({ navPath1, navPath2, navName1, navName2 }) {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <Link to={navPath1}>{navName1}</Link>
        <Link to={navPath2}>{navName2}</Link>
      </ul>
    </nav>
  );
}
