export default function DeletePost({ onDelete }) {
  return (
    <button onClick={onDelete} className="post-button">
      Supprimer
    </button>
  );
}
