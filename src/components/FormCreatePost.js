import '../styles/FormLogin.css';
import { useState } from 'react';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';

const api = new Api();

export default function FormCreatePost() {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    api.createPost().then(() => {
      navigate(`/wall/`);
    });
  }
  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <h2>De quoi souhaitez-vous discuter?</h2>
      <input
        type="image"
        placeholder="Télécharger une image ou vidéo"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        alt="Photo postée"
      />
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="form-login-btn">
        Poster
      </button>
    </form>
  );
}
