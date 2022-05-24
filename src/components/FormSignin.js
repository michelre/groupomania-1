import '../styles/FormLogin.css';
import { useState } from 'react';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';

const api = new Api();

export default function Signin() {
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState('');
  const [department, setDepartment] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    api.signin().then(() => {
      navigate(`/wall/`);
    });
  }
  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <img src="../images/welcome.jpg" alt="Welcome" />
      <h2>Créez votre compte en quelques minutes!</h2>
      <input
        type="text"
        placeholder="Prénom"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="image"
        placeholder="Photo"
        alt="Photo de l'utilisateur"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />
      <input
        type="text"
        placeholder="Département"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <button type="submit" className="form-login-btn">
        Créer un compte
      </button>
    </form>
  );
}
