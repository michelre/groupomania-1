import '../styles/Post.css';
import PropTypes from 'prop-types';
import LikePost from '../components/LikePost';
import DeletePost from '../components/DeletePost';
import ModifyPost from '../components/ModifyPost';

const PostButton = ({ modifiable, id, onDelete }) => {
  if (!modifiable) {
    return null;
  }
  return (
    <div className="post-buttons">
      <ModifyPost id={id} />
      <DeletePost id={id} onDelete={() => onDelete({ id })} />
    </div>
  );
};

export default function Post({
  id,
  alt,
  title,
  imageUrl,
  description,
  likes,
  onDelete,
  onLike,
  userId,
  firstname,
  createdAt,
  modifiable,
}) {
  return (
    <article className="post-container">
      <div className="post-author">
        <img alt="utilisateur" src={userId} className="post-author-img" />
        <p className="post-author-name">
          {firstname} a posté le {new Date(createdAt).toLocaleString('fr-FR')}
        </p>
      </div>
      <img className="post-img" alt={alt} src={imageUrl} />
      <h1 className="post-title">{title}</h1>
      <p className="post-description">{description}</p>
      <div className="post-functions">
        <LikePost onLike={() => onLike({ id })} count={likes} />
        <PostButton modifiable={modifiable} onDelete={onDelete} id={id} />
      </div>
    </article>
  );
}

Post.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  likes: PropTypes.number,
  onDeletePost: PropTypes.func,
  onLike: PropTypes.func,
  firstname: PropTypes.string,
  picture: PropTypes.string,
};
