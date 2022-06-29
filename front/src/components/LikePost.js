import '../styles/Like.css';
import Api from '../Api';

const api = new Api();

export default function LikePost({ id, likes }) {
  const onLikePost = () => {
    api.likePost(id, likes).then((p) => {
      likes = p.likes + 1;
    });
  };
  return (
    <div className="like-container">
      <i onClick={onLikePost} className="like-icon fas fa-thumbs-up"></i>
      <p className="like-count">{likes}</p>
    </div>
  );
}
