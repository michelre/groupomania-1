import '../styles/Nav.css'

function loginClick() {
  console.log('Utilisateur veut se connecter')
}

function createAccountClick() {
  console.log('Utilisateur veut créer un compte')
}

export default function Nav() {
    return(
      <nav className="nav">
        <ul className="nav-list">
            <li><a href="#" onClick={() => loginClick()}>Se connecter</a></li>
            <li><a href="#" onClick={() => createAccountClick()}>Créer un compte</a></li>
        </ul>
      </nav>  
    )
}