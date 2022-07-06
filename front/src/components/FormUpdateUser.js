import '../styles/FormLogin.css';
import { useState } from 'react';
import Api from '../Api';
import { useParams, useNavigate } from 'react-router-dom';

const api = new Api();

export default function UpdateUser({ user }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [email, setEmail] = useState(user.email);
  const [imageUrl, setImageUrl] = useState(user.imageUr);
  const [department, setDepartment] = useState(user.department || 'Marketing');
  const { id } = useParams();
  const navigate = useNavigate();
  const [invalidF, setInvalidF] = useState(false);
  const [invalidE, setInvalidE] = useState(false);

  const handleFocusF = (e) => {
    setInvalidF(true);
  };
  const handleFocusE = (e) => {
    setInvalidE(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    api
      .modifyUser({
        firstName,
        department,
        imageUrl,
        email,
        id,
      })
      .then(() => {
        navigate(`/wall/account`);
      });
  }
  return (
    <form
      className="form-login"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      method="put"
      action="/api/auth/users/:id"
    >
      <h2>Modifiez votre compte en quelques minutes!</h2>
      <input
        type="text"
        placeholder="Votre prénom"
        value={firstName}
        name="firstName"
        onChange={(e) => setFirstName(e.target.value)}
        onBlur={handleFocusF}
        invalid={invalidF.toString()}
        pattern="([a-zA-ZàâäéèëêîïôöùûüçæœÂÀÄÉÈÊËÎÏÔÖÛÜÙÇÆŒ]{2,})+([-'\s][a-zA-ZàâäéèëêîïôöùûüçæœÂÀÄÉÈÊËÎÏÔÖÛÜÙÇÆŒ]+)?$"
        required
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
        required
      />
      <span>Veuillez entrer un email valide!</span>
      <input
        type="file"
        placeholder="Photo"
        alt="Photo de l'utilisateur"
        value=""
        name="file"
        onChange={(e) => setImageUrl(e.target.files[0])}
        accept="image/*"
      />
      <img
        className="post-img-form-update"
        alt="posted pic"
        src={user.imageUrl}
      />
      <label htmlFor="department-select">Choisir votre département:</label>
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
