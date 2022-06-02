import { Link } from 'react-router-dom';

export default function CreatePost() {
  return (
    <Link to="posts">
      <button type="submit" className="form-login-btn form-login">
        Créer un post
      </button>
    </Link>
  );
}
