import Api from '../Api';
import { useNavigate } from 'react-router-dom';

const api = new Api();

export default function ModifyPost() {
  const navigate = useNavigate();
  function handleClick(e) {
    e.preventDefault();
    api.modifyPost().then(() => {
      navigate(`/wall/createpost`);
    });
  }
  return (
    <button onClick={handleClick} className="form-login-btn">
      Modifier
    </button>
  );
}
