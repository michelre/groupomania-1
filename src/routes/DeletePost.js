import Api from '../Api';
import { useNavigate } from 'react-router-dom';

const api = new Api();

export default function DeletePost() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    api.deletePost().then(() => {
      navigate(`/wall/`);
      alert('Êtes-vous sûr de vouloir supprimer ce post?');
    });
  }
  return (
    <button onClick={handleClick} className="form-login-btn">
      Supprimer
    </button>
  );
}
