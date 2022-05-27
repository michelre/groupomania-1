import '../styles/FormLogin.css';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';
import FormPost from '../components/FormPost';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const api = new Api();

export default function FormCreatePost() {
  const navigate = useNavigate();

  function createPost(post) {
    api.createPost(post).then(() => {
      navigate(`/wall/`);
    });
  }

  return (
    <div>
      <Banner />
      <FormPost onCreatePost={createPost} />
      <Footer />
    </div>
  );
}
