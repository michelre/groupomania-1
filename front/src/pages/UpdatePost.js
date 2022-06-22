import '../styles/FormLogin.css';
import { useEffect, useState } from 'react';
import Api from '../Api';
import { useParams } from 'react-router-dom';
import FormPost from '../components/FormPost';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const api = new Api();

export default function UpdatePost() {
  const [post, setPost] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    api.getPostById(id).then((p) => {
      //createPost(p);
      setPost(p);
    });
  }, [id]);

  return (
    <div>
      <Banner />
      <Nav
        navName1={'Mur'}
        navPath1={'/wall'}
        navName2={'Se déconnecter'}
        navPath2={'/'}
      />
      {post ? <FormPost /*onCreatePost={createPost}*/ post={post} /> : ''}
      <Footer />
    </div>
  );
}
