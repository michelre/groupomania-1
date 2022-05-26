import '../styles/FormLogin.css';
import { useState } from 'react';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';

const api = new Api();

export default function FormCreatePost() {
  const [file, setFile] = useState('');
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
      <h2>C'est parti! Créez ou modifiez vos posts!</h2>
      <input
        type="file"
        placeholder="Télécharger une image ou vidéo"
        value={file}
        onChange={(e) => setFile(e.target.value)}
      />
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="form-login-btn">
        Publier
      </button>
      <img src="..\images\discuss.jpg" alt="Bavardages" />
    </form>
  );
}
