import '../styles/FormLogin.css';
import { useState } from 'react';

export default function Signin({ onSignin, onModifyUser }) {
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState('');
  const [department, setDepartment] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSignin({
      firstname,
      email,
      password,
      picture,
      department,
    });
    onModifyUser({
      firstname,
      picture,
      department,
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
