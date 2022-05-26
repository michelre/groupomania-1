import Api from '../Api';
import { useNavigate } from 'react-router-dom';

const api = new Api();

export default function DeleteUser() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    api.deleteUser().then(() => {
      navigate(`/`);
      alert('Êtes-vous sûr de vouloir supprimer votre compte?');
    });
  }
  return (
    <button onClick={handleClick} className="form-login-btn">
      Supprimer mon compte
    </button>
  );
}
