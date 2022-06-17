import '../styles/FormLogin.css';
import { useState } from 'react';

export default function UpdateUser({ onModifyUser }) {
  const [firstname, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState('');
  const [department, setDepartment] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onModifyUser({
      firstname,
      picture,
      department,
    });
  }
  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <h2>Modifiez votre compte en quelques minutes!</h2>
      <input
        type="text"
        placeholder="Votre prénom"
        value={firstname}
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
      <input
        type="file"
        placeholder="Photo"
        alt="Photo de l'utilisateur"
        value={picture}
        name="picture"
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
        Modifier mon compte
      </button>
    </form>
  );
}
