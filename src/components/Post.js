import '../styles/Post.css';
import PropTypes from 'prop-types';
import LikePost from '../routes/LikePost';
import DeletePost from '../routes/DeletePost';
import ModifyPost from '../routes/ModifyPost';

export default function Post(props) {
  return (
    <article className="post-container">
      <img
        className="post-img"
        alt={props.item.alt}
        src={`../images/${props.item.img}`}
      />
      <h1 className="post-title">{props.item.title}</h1>
      <p className="post-description">{props.item.description}</p>
      <LikePost />
      <ModifyPost />
      <DeletePost />
    </article>
  );
}

Post.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
};
