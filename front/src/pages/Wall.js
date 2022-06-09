import Banner from '../components/Banner';
import Post from '../components/Post';
import Api from '../Api';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import CreatePost from '../components/CreatePost';
import '../styles/Wall.css';
import Nav from '../components/Nav';

const api = new Api();

export default function Wall() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    api.getAllPosts().then((p) => {
      setPosts(p);
    });
  }, []);

  const onDeletePost = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce post?')) {
      api.deletePost().then(() => {
        const newPosts = posts.filter((p) => p.id !== id);
        setPosts(newPosts);
      });
    }
  };

  const onLikePost = (id) => {
    api.likePost(id).then(() => {
      const newPosts = posts.map((p) => {
        if (p.id === id) {
          return { ...p, likes: p.likes + 1 };
        }
        return p;
      });
      setPosts(newPosts);
    });
  };

  const onHeartPost = (id) => {
    api.lovePost(id).then(() => {
      const newPosts = posts.map((p) => {
        if (p.id === id) {
          return { ...p, loves: p.loves + 1 };
        }
        return p;
      });
      setPosts(newPosts);
    });
  };
  return (
    <div>
      <Banner />
      <Nav
        navName1={'Mon compte'}
        navPath1={'account'}
        navName2={'Se déconnecter'}
        navPath2={'/'}
      />
      <main className="container">
        <h2>De quoi souhaitez-vous discuter?</h2>
        <CreatePost />
        <section className="container-post">
          {posts.map((post) => (
            <Post
              alt={post.alt}
              title={post.title}
              description={post.description}
              img={post.img}
              id={post.id}
              key={post.id}
              likes={post.likes}
              loves={post.loves}
              onDelete={onDeletePost}
              onLike={onLikePost}
              onHeart={onHeartPost}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
