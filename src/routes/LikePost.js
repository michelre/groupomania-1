import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../styles/Like.css';
import Api from '../Api';

const api = new Api();

export default function LikePost() {
  const [count, setCount] = useState(0);
  function handleClick(e) {
    e.preventDefault();
    api.likePost().then(() => {
      setCount((c) => c + 1);
    });
  }
  return (
    <div className="like-container">
      <FontAwesomeIcon
        icon={faHeart}
        className="like-icon"
        onClick={handleClick}
      />
      <p className="like-count">{count}</p>
    </div>
  );
}
