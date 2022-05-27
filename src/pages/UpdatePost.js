import '../styles/FormLogin.css';
import { useEffect, useState } from 'react';
import Api from '../Api';
import { useNavigate, useParams } from 'react-router-dom';
import FormPost from '../components/FormPost';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const api = new Api();

export default function FormCreatePost() {
  const [post, setPost] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    api.getPostById(id).then((p) => {
      setPost(p);
    });
  }, []);

  function createPost(post) {
    api.createPost(post).then(() => {
      navigate(`/wall/`);
    });
  }

  return (
    <div>
      <Banner />
      {post ? <FormPost onCreatePost={createPost} post={post} /> : ''}
      <Footer />
    </div>
  );
}
