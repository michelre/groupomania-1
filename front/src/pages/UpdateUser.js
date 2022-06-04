import '../styles/FormLogin.css';
import { useEffect, useState } from 'react';
import Api from '../Api';
import { useNavigate, useParams } from 'react-router-dom';
import FormSignin from '../components/FormSignin';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const api = new Api();

export default function UpdateUser() {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    api.getUserById(id).then((u) => {
      setUser(u);
    });
  }, [id]);

  function updateUser(user) {
    api.modifyUser(user).then(() => {
      navigate(`/account/`);
    });
  }

  return (
    <div>
      <Banner />
      <Nav
        navName1={'Mur'}
        navPath1={'/wall'}
        navName2={'Se déconnecter'}
        navPath2={'/'}
      />
      {user ? <FormSignin onModifyUser={updateUser} user={user} /> : ''}
      <Footer />
    </div>
  );
}
