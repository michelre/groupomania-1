import '../styles/Nav.css'
import { Link } from "react-router-dom";

export default function Nav() {
    return(
      <nav className="nav">
        <ul className="nav-list">
          <Link to="login">Se connecter</Link>
          <Link to="createaccount">Créer un compte</Link>
        </ul>
      </nav>  
    )
    }
  