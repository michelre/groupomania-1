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
      <img src="../images/team.webp" alt="Team Check" />
      <h2>Créez votre compte en quelques minutes!</h2>
      <input
        type="text"
        placeholder="Votre prénom"
        value={firstname}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Votre mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="file"
        placeholder="Photo"
        alt="Photo de l'utilisateur"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />
      <label for="department-select">Choisir votre département:</label>
      <select
        name="department-select"
        id="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="Marketing">Marketing</option>
        <option value="Sales">Sales</option>
        <option value="Tech">Tech</option>
        <option value="Ops">Ops</option>
      </select>
      <button type="submit" className="form-login-btn">
        Créer un compte
      </button>
    </form>
  );
}
