import Api from '../Api';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const api = new Api();

export default function ModifyPost({postId}) {

  return (
    <Link to={`posts/${postId}`} className="form-login-btn">
      Modifier
    </Link>
  );
}
