import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '../styles/Like.css';

export default function LikePost({ count, onLike }) {
  return (
    <div className="like-container">
      <FontAwesomeIcon icon={faHeart} className="like-icon" onClick={onLike} />
      <p className="like-count">{count}</p>
    </div>
  );
}
