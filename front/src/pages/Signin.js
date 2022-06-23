import Banner from '../components/Banner';
import FormSignin from '../components/FormSignin';
import Footer from '../components/Footer';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';

const api = new Api();

export default function Signin() {
  const navigate = useNavigate();
  const onSignin = ({ email, password, firstName }) => {
    api.signin({ email, password, firstName }).then((res) => {
      navigate(`/login/`);
    }).catch(() => {
        alert('Une erreur est survenue, veuillez recommencer ultérieurement.');
    });
  };
  return (
    <div>
      <Banner />
      <FormSignin onSignin={onSignin} />
      <Footer />
    </div>
  );
}
