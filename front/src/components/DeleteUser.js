import { Link } from 'react-router-dom';

export default function DeleteUser({ onDeleteUser }) {
  return (
    <Link to={'/logout'} onClick={onDeleteUser} className="post-button">
      Supprimer mon compte
    </Link>
  );
}
