import { Link } from 'react-router-dom';

export default function ModifyPost({ postId }) {
  return (
    <Link to={`posts/${postId}`} className="post-button">
      Modifier
    </Link>
  );
}
