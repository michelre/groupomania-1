import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Account from '../components/Account';
import Nav from '../components/Nav';

const api = new Api();

export default function User() {
  const navigate = useNavigate();
  const [users, SetUsers] = useState([]);
  const onDeleteUser = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte?')) {
      api.deleteUser().then(() => {
        const newUsers = users.filter((user) => user.id !== id);
        SetUsers(newUsers);
        navigate(`/`);
      });
    }
  };
  return (
    <div>
      <Banner />
      <Nav
        navName1={'Mur'}
        navPath1={'/wall'}
        navName2={'Se déconnecter'}
        navPath2={'/'}
      />
      <Account
        firstname="Maria"
        picture="https://pngimg.com/uploads/pokemon/pokemon_PNG14.png"
        onDeleteUser={onDeleteUser}
        email="ma@groupomania.com"
        department="Tech"
        alt="Pikachu"
      />
      <Footer />
    </div>
  );
}
