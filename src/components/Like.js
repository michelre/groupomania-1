import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../styles/Like.css';

export default function Like() {
  const [count, setCount] = useState(0);
  return (
    <div className="like-container">
      <FontAwesomeIcon
        icon={faHeart}
        className="like-icon"
        onClick={() => setCount((c) => c + 1) & { color: '#792026' }}
      />
      <p className="like-count">{count}</p>
    </div>
  );
}
