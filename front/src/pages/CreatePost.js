import '../styles/FormLogin.css';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';
import FormPost from '../components/FormPost';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const api = new Api();

export default function FormCreatePost() {
  const navigate = useNavigate();
  function createPost({ title, imageUrl, description, userId }) {
    api
      .createPost({
        title,
        imageUrl,
        description,
        userId,
      })
      .then(() => {
        navigate(`/wall/`);
      });
  }

  return (
    <div>
      <Banner />
      <Nav
        navName1={'Mur'}
        navPath1={'/wall'}
        navName2={'Se déconnecter'}
        navPath2={'/logout'}
      />
      <FormPost onCreatePost={createPost} />
      <Footer />
    </div>
  );
}
