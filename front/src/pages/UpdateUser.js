import '../styles/FormLogin.css';
import { useEffect, useState } from 'react';
import Api from '../Api';
import { useParams } from 'react-router-dom';
import FormUpdateUser from '../components/FormUpdateUser';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const api = new Api();

export default function UpdateUser() {
  const [user, setUser] = useState(null);
  //const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    api
      .getUserById(id)
      .then((response) => {
        console.log(response);
        setUser(response);
      })
      .catch((error) => {
        alert("L'utilisateur n'a pas pu être trouvé");
        console.log(error);
      });
  }, [id]);

  console.log(id);
  console.log(user);
  /*function updateUser(user) {
    api.modifyUser(user).then(() => {
      navigate(`/account/`);
    });
  }*/

  return (
    <div>
      <Banner />
      <Nav
        navName1={'Mur'}
        navPath1={'/wall'}
        navName2={'Se déconnecter'}
        navPath2={'/logout'}
      />
      {user ? <FormUpdateUser user={user} /> : ''}
      <Footer />
    </div>
  );
}
