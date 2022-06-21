import '../styles/FormLogin.css';
import { useState } from 'react';

export default function Signin({ onSignin }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      />
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Votre mot de passe"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="form-login-btn">
        Créer un compte
      </button>
    </form>
  );
}
