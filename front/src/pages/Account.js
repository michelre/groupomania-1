import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Api from '../Api';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import User from '../components/User';
import Nav from '../components/Nav';

const api = new Api();

export default function Account() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const id = JSON.parse(localStorage.getItem('userId'));
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:3001/api/auth/users/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
    })
      .then((user) => {
        return user.json();
      })
      .then((response) => {
        console.log(response);
        setUser(response);
      })
      .catch((error) => {
        alert("L'utilisateur n'a pas pu être trouvé");
        console.log(error);
      });
  }, [id]);

  const onDeleteUser = ({ id }) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte?')) {
      api.deleteUser(id).then(() => {
        /*const newUsers = user.filter((u) => u.id !== id);
        setUser(newUsers);*/
        navigate(`/logout`);
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
        navPath2={'logout'}
      />
      <User
        firstName={user.firstName}
        picture={user.picture}
        onDeleteUser={onDeleteUser}
        email={user.email}
        department={user.department}
        alt={user.alt}
        id={user.id}
      />
      <Footer />
    </div>
  );
}
