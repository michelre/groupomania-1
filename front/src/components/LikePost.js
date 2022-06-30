import '../styles/Like.css';
import Api from '../Api';

const api = new Api();

export default function LikePost({ id, likes, userId, usersLiked }) {
  const onLike = () => {
    api.likePost(id, likes).then(() => {
      return;
    });
  };

  /*if (usersLiked.includes(userId)) {
    console.log(userId);
    console.log(usersLiked);*/
  return (
    <div className="like-container">
      <i
        style={{ color: '#4E5166' }}
        onClick={onLike}
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
