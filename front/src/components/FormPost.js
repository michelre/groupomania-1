import '../styles/FormLogin.css';
import { useState } from 'react';

export default function FormPost({ onCreatePost }) {
  const [img, setImg] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const userId = JSON.parse(localStorage.getItem('userId'));
  console.log(userId);

  function handleSubmit(e) {
    e.preventDefault();
    onCreatePost({
      img,
      title,
      description,
      userId,
    });
  }

  return (
    <form
      id={userId}
      encType="multipart/form-data"
      className="form-login"
      onSubmit={handleSubmit}
      action="/api/file"
      method="post"
    >
      <h2>C'est parti! Créez vos posts!</h2>
      <input
        type="file"
        placeholder="Télécharger une image ou vidéo"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        name="file"
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
