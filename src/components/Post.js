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
  firstname = 'Pikachu',
  picture = 'https://pngimg.com/uploads/pokemon/pokemon_PNG14.png',
}) {
  return (
    <article className="post-container">
      <div className="post-author">
        <img alt="utilisateur" src={picture} className="post-author-img" />
        <h3>{firstname} a posté:</h3>
      </div>
      <img className="post-img" alt={alt} src={`../images/${img}`} />
      <h1 className="post-title">{title}</h1>
      <p className="post-description">{description}</p>
      <div className="post-functions">
        <LikePost onLike={() => onLike(id)} count={likes} />
        <div className="post-buttons">
          <ModifyPost postId={id} />
          <DeletePost onDelete={() => onDelete(id)} />
        </div>
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
  firstname: PropTypes.string,
  picture: PropTypes.string,
};
