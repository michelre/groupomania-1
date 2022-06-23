import '../styles/FormLogin.css';
import { useEffect, useState } from 'react';
//import Api from '../Api';
import { useParams } from 'react-router-dom';
import FormUpdatePost from '../components/FormUpdatePost';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

//const api = new Api();

export default function UpdatePost() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3001/api/posts/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
    })
      .then((post) => {
        return post.json();
      })
      .then((response) => {
        console.log(response);
        setPost(response);
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
        navPath2={'/'}
      />
      {post ? <FormUpdatePost post={post} /> : ''}
      <Footer />
    </div>
  );
}
