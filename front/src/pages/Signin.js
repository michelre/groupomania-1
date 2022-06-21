import Banner from '../components/Banner';
import FormSignin from '../components/FormSignin';
import Footer from '../components/Footer';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';

const api = new Api();

export default function Signin() {
  const navigate = useNavigate();
  const onSignin = ({ email, password, firstName }) => {
    api.signin({ email, password, firstName }).then(() => {
      navigate(`/wall/`);
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
