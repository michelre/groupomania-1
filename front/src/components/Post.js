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
  userLiked,
  userId,
  onDelete,
  onLike,
  firstname,
  createdAt,
  modifiable,
  picture,
  onLikePost
}) {
  return (
    <article className="post-container">
      <div className="post-author">
        {picture ? <img alt="utilisateur" src={picture} className="post-author-img" /> : ''}
        <p className="post-author-name">
          {firstname} a posté le{' '}
          {new Date(createdAt).toLocaleDateString('fr-FR')}:
        </p>
      </div>
      {imageUrl ? <img className="post-img" alt={alt} src={imageUrl} /> : ''}
      <h1 className="post-title">{title}</h1>
      <p className="post-description">{description}</p>
      <div className="post-functions">
        <LikePost
          onLike={onLike}
          id={id}
          likes={likes}
          userId={userId}
          userLiked={userLiked}
          onLikePost={onLikePost}
        />
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
  userId: PropTypes.number,
};
