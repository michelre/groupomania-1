import '../styles/Account.css';
import PropTypes from 'prop-types';
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
      <h1 className="account-title">Mon compte</h1>
      <div className="account-info">
        <img src={picture} className="account-img" alt={alt} />
        <div className="account-description">
          <h2 className="account-name">Salut {firstname}!</h2>
          <p className="account-email">Email: {email}</p>
          <p className="account-department">Département: {department}</p>
        </div>
      </div>
      <div className="account-functions">
        {/*<ModifyAccount accountId={id} />*/}
        <DeleteUser onDeleteUser={onDeleteUser} />
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
