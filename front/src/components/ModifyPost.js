import { Link } from 'react-router-dom';

export default function ModifyPost({ id }) {
  console.log(id);
  return (
    <Link to={`posts/${id}`} className="post-button">
      Modifier
    </Link>
  );
}
