import Banner from '../components/Banner';
import FormLogin from '../components/FormLogin';
import Footer from '../components/Footer';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';

const api = new Api();

export default function Login() {
  const navigate = useNavigate();
  const onLogin = ({ email, password }) => {
    api
      .login({ email, password })
      .then((response) => {
        const token = response.token;
        localStorage.setItem('token', JSON.stringify(token));
        const userId = response.userId;
        localStorage.setItem('userId', JSON.stringify(userId));
        navigate(`/wall/`);
      })
      .catch(() => {
        alert('Votre email ou mot de passe est érroné, veuillez recommencer!');
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
