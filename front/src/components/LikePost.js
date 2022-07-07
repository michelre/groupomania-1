import '../styles/Like.css';

export default function LikePost({ id, likes, onLikePost, userLiked }) {
  return (
    <div className="like-container">
      <i
        style={{ color: userLiked ? '#FD2D01' : '#4E5166' }}
        onClick={() => onLikePost(id)}
        className="like-icon fas fa-thumbs-up"
      ></i>
      <p
        style={{ color: userLiked ? '#FD2D01' : '#4E5166' }}
        className="like-count"
      >
        {likes}
      </p>
    </div>
  );
}
