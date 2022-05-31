export default function ModifyUser({ onModifyUser }) {
  return (
    <button onClick={onModifyUser} className="form-login-btn">
      Modifier mon compte
    </button>
  );
}
