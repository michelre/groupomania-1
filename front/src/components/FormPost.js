import '../styles/FormLogin.css';
import { useState } from 'react';

export default function FormPost({ onCreatePost }) {
  const [file, setFile] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onCreatePost({
      title,
      file,
      description,
    });
  }
  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <h2>C'est parti! Créez vos posts!</h2>
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
        required
      />
      <button type="submit" className="form-login-btn">
        Publier
      </button>
      <img src="..\images\discuss.jpg" alt="Bavardages" />
    </form>
  );
}
