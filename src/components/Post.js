import '../styles/Post.css';
import PropTypes from 'prop-types';
import LikePost from '../components/LikePost';
import DeletePost from '../components/DeletePost';
import ModifyPost from '../components/ModifyPost';

export default function Post({
  id,
  alt,
  title,
  img,
  description,
  likes,
  onDelete,
  onLike,
}) {
  return (
    <article className="post-container">
      <div className="post-author">
        <img alt="utilisateur" />
        <h3>"prénom" a posté:</h3>
      </div>
      <img className="post-img" alt={alt} src={`../images/${img}`} />
      <h1 className="post-title">{title}</h1>
      <p className="post-description">{description}</p>
      <div className="post-functions">
        <LikePost onLike={() => onLike(id)} count={likes} />
        <ModifyPost postId={id} />
        <DeletePost onDelete={() => onDelete(id)} />
      </div>
    </article>
  );
}

Post.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
  likes: PropTypes.number,
  onDeletePost: PropTypes.func,
  onLike: PropTypes.func,
};
