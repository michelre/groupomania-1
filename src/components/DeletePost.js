import Api from '../Api';
import { useNavigate } from 'react-router-dom';

const api = new Api();

export default function DeletePost({onDelete}) {
  return (
    <button onClick={onDelete} className="form-login-btn">
      Supprimer
    </button>
  );
}
