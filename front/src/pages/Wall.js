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
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/api/posts', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
    })
      .then((post) => post.json())
      .then(
        (response) => {
          console.log(response);
          setIsLoaded(true);
          setPosts(response);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const onDeletePost = ({ id }) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce post?')) {
      api.deletePost(id).then(() => {
        const newPosts = posts.filter((p) => p.id !== id);
        setPosts(newPosts);
      });
    }
  };

  const onLikePost = ({ id }) => {
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

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Banner />
        <Nav
          navName1={'Mon compte'}
          navPath1={'/account'}
          navName2={'Se déconnecter'}
          navPath2={'/logout'}
        />
        <main className="container">
          <h2>De quoi souhaitez-vous discuter?</h2>
          <CreatePost />
          <section className="container-post">
            {posts?.map((post) => (
              <Post
                alt={post.alt}
                title={post.title}
                description={post.description}
                img={post.imageUrl}
                id={post.id}
                key={post.id}
                likes={post.likes}
                onDelete={onDeletePost}
                onLike={onLikePost}
                firstname={post.firstname}
                picture={post.picture}
              />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
