import '../styles/Account.css';
import PropTypes from 'prop-types';
import CreatePost from '../components/CreatePost';
import DeleteUser from '../components/DeleteUser';

export default function Account({
  firstname,
  email,
  picture,
  alt,
  department,
  onDeleteUser,
}) {
  return (
    <article className="account-container">
      <h1>Mon compte</h1>
      <img src={picture} className="account-img" alt={alt} />
      <h2 className="account-title">Salut {firstname}!</h2>
      <p className="account-email">Email: {email}</p>
      <p>Département: {department}</p>
      <div className="account-functions">
        {/*<ModifyAccount accountId={id} />*/}
        <DeleteUser onDeleteUser={onDeleteUser} />
        <CreatePost />
      </div>
    </article>
  );
}

Account.propTypes = {
  alt: PropTypes.string,
  firstname: PropTypes.string,
  email: PropTypes.string,
  picture: PropTypes.string,
  department: PropTypes.string,
  onDeleteUser: PropTypes.func,
};
