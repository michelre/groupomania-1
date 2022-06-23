import '../styles/FormLogin.css';
import { useState } from 'react';
import Api from '../Api';
import { useParams, useNavigate } from 'react-router-dom';

const api = new Api();

export default function UpdateUser({ user }) {
  const [firstName, setfirstName] = useState(user.firstName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);
  const [picture, setPicture] = useState(user.picture);
  const [department, setDepartment] = useState(user.department);
  const { id } = useParams();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await api
      .modifyUser({
        firstName,
        picture,
        department,
        email,
        password,
        id,
      })
      .then(() => {
        navigate(`/wall/`, { replace: true });
      });
  }
  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <h2>Modifiez votre compte en quelques minutes!</h2>
      <input
        type="text"
        placeholder="Votre prénom"
        value={firstName}
        name="firstName"
        onChange={(e) => setfirstName(e.target.value)}
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
      <img
        className="post-img-form-update"
        alt="posted pic"
        src={user.imageUrl}
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
