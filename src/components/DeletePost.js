export default function DeletePost({ onDelete }) {
  return (
    <button onClick={onDelete} className="form-login-btn post-button">
      Supprimer
    </button>
  );
}
