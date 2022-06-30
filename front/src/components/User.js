import '../styles/User.css';
import PropTypes from 'prop-types';
import DeleteUser from './DeleteUser';
import ModifyUser from './ModifyUser';

export default function User({
  id,
  firstName,
  email,
  imageUrl,
  alt,
  department,
  onDeleteUser,
}) {
  return (
    <article className="account-container">
      <h1 className="account-title">Mon compte</h1>
      <div className="account-info">
        <img src={imageUrl} className="account-img" alt={alt} />
        <div className="account-description">
          <h2 className="account-name">
            Salut {firstName}
            <i className="user-icon far fa-smile-beam"></i>!
          </h2>
          <br />
          <div className="account-icon">
            <i className="user-icon fas fa-at"></i>
            <p className="account-email">
              Email:
              <br />
              {email}
            </p>
          </div>
          <br />
          <div className="account-icon">
            <i className="user-icon fas fa-building"></i>
            <p className="account-department">
              Département: <br />
              {department}
            </p>
          </div>
        </div>
      </div>
      <div className="account-functions">
        <ModifyUser userId={id} />
        <DeleteUser userId={id} onDeleteUser={() => onDeleteUser({ id })} />
      </div>
    </article>
  );
}

User.propTypes = {
  alt: PropTypes.string,
  firstName: PropTypes.string,
  email: PropTypes.string,
  imageUrl: PropTypes.string,
  department: PropTypes.string,
  onDeleteUser: PropTypes.func,
  id: PropTypes.number,
};
