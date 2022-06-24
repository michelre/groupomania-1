import '../styles/FormLogin.css';
import { useEffect, useState } from 'react';
import Api from '../Api';
import { useParams } from 'react-router-dom';
import FormUpdatePost from '../components/FormUpdatePost';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const api = new Api();

export default function UpdatePost() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    api
      .getPostById(id)
      .then((post) => {
        setPost(post);
      })
      .catch((error) => {
        alert("Le post n'a pas pu être trouvé");
        console.log(error);
      });
  }, [id]);

  console.log(id);
  console.log(post);

  return (
    <div>
      <Banner />
      <Nav
        navName1={'Mur'}
        navPath1={'/wall'}
        navName2={'Se déconnecter'}
        navPath2={'/logout'}
      />
      {post ? <FormUpdatePost post={post} /> : ''}
      <Footer />
    </div>
  );
}
