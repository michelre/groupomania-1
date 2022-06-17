import { Link } from 'react-router-dom';

export default function ModifyUser({ userId }) {
  return (
    <Link to={`update/${userId}`} className="post-button">
      Modifier mon compte
    </Link>
  );
}
