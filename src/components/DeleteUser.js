export default function DeleteUser({ onDeleteUser }) {
  return (
    <button onClick={onDeleteUser} className="form-login-btn">
      Supprimer mon compte
    </button>
  );
}
