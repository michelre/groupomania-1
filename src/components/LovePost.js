import '../styles/Like.css';

export default function LovePost({ count, onHeart }) {
  return (
    <div className="like-container">
      <i onClick={onHeart} className="like-icon fas fa-heart"></i>
      <p className="like-count">{count}</p>
    </div>
  );
}
