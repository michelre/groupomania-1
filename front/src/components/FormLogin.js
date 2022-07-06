import '../styles/FormLogin.css';
import { useState } from 'react';

export default function FormLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [invalidE, setInvalidE] = useState(false);
  const [invalidP, setInvalidP] = useState(false);

  const handleFocusE = (e) => {
    setInvalidE(true);
  };
  const handleFocusP = (e) => {
    setInvalidP(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    onLogin({
      email,
      password,
    });
  }
  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <img src="..\images\welcome.jpg" alt="Welcome" />
      <h2>Welcome back!</h2>
      <input
        type="email"
        placeholder="Email"
        className="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleFocusE}
        invalid={invalidE.toString()}
        pattern="([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,5})$"
        required
      />
      <span>Votre email n'est pas correct!</span>
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handleFocusP}
        invalid={invalidP.toString()}
        pattern="^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$"
        required
      />
      <span>Votre mot de passe n'est pas correct!</span>
      <button type="submit" className="form-login-btn">
        Se connecter
      </button>
    </form>
  );
}
