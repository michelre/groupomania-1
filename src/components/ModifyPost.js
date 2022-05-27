import { Link } from 'react-router-dom';

export default function ModifyPost({ postId }) {
  return (
    <Link to={`posts/${postId}`} className="form-login-btn">
      Modifier
    </Link>
  );
}
