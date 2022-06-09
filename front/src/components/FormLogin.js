import '../styles/FormLogin.css';
import { useState } from 'react';

export default function FormLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit" className="form-login-btn">
        Se connecter
      </button>
    </form>
  );
}
