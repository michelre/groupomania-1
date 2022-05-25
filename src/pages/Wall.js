import Banner from '../components/Banner';
import Post from '../components/Post';
import Api from '../Api';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteUser from '../routes/DeleteUser';
import '../styles/Wall.css';

const api = new Api();

export default function Wall() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.getAllPosts().then((p) => {
      setPosts(p);
    });
  }, []);
  return (
    <div>
      <Banner />
      <main className="container">
        <h2>De quoi souhaitez-vous discuter?</h2>
        <Link to="createpost">
          <button type="submit" className="form-login-btn form-login">
            Créer un post
          </button>
        </Link>
        {posts.map((post) => (
          <Post key={post.id} item={post} />
        ))}
        <DeleteUser />
      </main>
      <Footer />
    </div>
  );
}
