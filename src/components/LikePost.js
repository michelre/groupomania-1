import '../styles/Like.css';

export default function LikePost({ count, onLike }) {
  return (
    <div className="like-container">
      <i onClick={onLike} className="like-icon fas fa-thumbs-up"></i>
      <p className="like-count">{count}</p>
    </div>
  );
}
