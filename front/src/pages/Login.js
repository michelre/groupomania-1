import Banner from '../components/Banner';
import FormLogin from '../components/FormLogin';
import Footer from '../components/Footer';
import Api from '../Api';
//import { useNavigate } from 'react-router-dom';

const api = new Api();

export default function Login() {
  //const navigate = useNavigate();
  const onLogin = ({ email, password }) => {
    api.login({ email, password }).then(() => {
      //navigate(`/wall/`);
    });
  };
  return (
    <div>
      <Banner />
      <FormLogin onLogin={onLogin} />
      <Footer />
    </div>
  );
}
