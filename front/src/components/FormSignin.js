import '../styles/FormLogin.css';
import { useState } from 'react';

export default function Signin({ onSignin }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidF, setInvalidF] = useState(false);
  const [invalidE, setInvalidE] = useState(false);
  const [invalidP, setInvalidP] = useState(false);

  const handleFocusF = (e) => {
    setInvalidF(true);
  };
  const handleFocusE = (e) => {
    setInvalidE(true);
  };
  const handleFocusP = (e) => {
    setInvalidP(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onSignin({
      firstName,
      email,
      password,
    });
  }

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <img src="../images/team.webp" alt="Team Check" />
      <h2>Créez votre compte en quelques minutes!</h2>
      <input
        type="text"
        placeholder="Votre prénom"
        value={firstName}
        name="firstname"
        onChange={(e) => setFirstName(e.target.value)}
        required
        onBlur={handleFocusF}
        invalid={invalidF.toString()}
        pattern="([a-zA-ZàâäéèëêîïôöùûüçæœÂÀÄÉÈÊËÎÏÔÖÛÜÙÇÆŒ]{2,})+([-'\s][a-zA-ZàâäéèëêîïôöùûüçæœÂÀÄÉÈÊËÎÏÔÖÛÜÙÇÆŒ]+)?$"
        title="Veuillez entrer votre prénom!"
      />
      <span>Veuillez entrer votre prénom!</span>
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleFocusE}
        invalid={invalidE.toString()}
        pattern="([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$"
        title="Veuillez entrer un email valide!"
        required
      />
      <span>Veuillez entrer un email valide!</span>
      <input
        type="password"
        placeholder="Votre mot de passe"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handleFocusP}
        invalid={invalidP.toString()}
        pattern="^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$"
        title="Veuillez entrer un mot de passe de minimum 8 caratères comprenant au
        moins 1 majuscule, 1 chiffre, 1 minuscule et 1 caractère spécial!"
        required
      />
      <span>
        Veuillez entrer un mot de passe de minimum 8 caratères comprenant au
        moins 1 majuscule, 1 chiffre, 1 minuscule et 1 caractère spécial!
      </span>
      <button type="submit" className="form-login-btn">
        Créer un compte
      </button>
    </form>
  );
}
