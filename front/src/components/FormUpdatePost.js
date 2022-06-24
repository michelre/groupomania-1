import '../styles/FormLogin.css';
import '../styles/Post.css';
import { useState } from 'react';
import Api from '../Api';
import { useParams, useNavigate } from 'react-router-dom';

const api = new Api();

export default function FormUpdatePost({ post }) {
  const [img, setImg] = useState(post.img);
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const { id } = useParams();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    api
      .modifyPost({
        title,
        img,
        description,
        id,
      })
      .then(() => {
        navigate(`/wall/`);
      });
  }

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <h2>Modifiez votre post!</h2>
      <input
        type="file"
        placeholder="Télécharger une image ou vidéo"
        value={img}
        onChange={(e) => setImg(e.target.value)}
      />
      <img
        className="post-img-form-update"
        alt="posted pic"
        src={post.imageUrl}
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
        Modifier
      </button>
    </form>
  );
}
