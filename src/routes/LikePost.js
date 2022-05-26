import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import '../styles/Like.css';
import Api from '../Api';

const api = new Api();

export default function LikePost({count, onLike}) {
  return (
    <div className="like-container">
      <FontAwesomeIcon
        icon={faHeart}
        className="like-icon"
        onClick={onLike}
      />
      <p className="like-count">{count}</p>
    </div>
  );
}
