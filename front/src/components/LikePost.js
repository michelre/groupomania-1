import '../styles/Like.css';
import Api from '../Api';

const api = new Api();

export default function LikePost({ id, likes, onLikePost, userLiked }) {
  /*if (usersLiked.includes(userId)) {
    console.log(userId);
    console.log(usersLiked);*/
    console.log(userLiked)
  return (
    <div className="like-container">
      <i
        style={{ color: userLiked ? 'red' : '#4E5166' }}
        onClick={() => onLikePost(id)}
        className="like-icon fas fa-thumbs-up"
      ></i>
      <p style={{ color: '#4E5166' }} className="like-count">
        {likes}
      </p>
    </div>
  );
  /*} else {
    return (
      <div className="like-container">
        <i
          style={{ color: '#FD2D01' }}
          onClick={onLike}
          className="like-icon fas fa-thumbs-up"
        ></i>
        <p style={{ color: '##FD2D01' }} className="like-count">
          {likes}
        </p>
      </div>
    );
  }*/
}
