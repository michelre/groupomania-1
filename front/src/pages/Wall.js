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
    api
      .getAllPosts()
      .then((posts) => {
        setIsLoaded(true);
        setPosts(posts);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  const onDeletePost = ({ id }) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer ce post?')) {
      api.deletePost(id).then(() => {
        const newPosts = posts.filter((p) => p.id !== id);
        setPosts(newPosts);
      });
    }
  };

  const onLikePost = (postId) => {
        api.likePost(postId).then((res) => {
            const newPosts = posts.map((p) => {
                if(p.id === postId){
                    return {...p, ...res}
                }
                return p
            })
            setPosts(newPosts)
        });
    };

  console.log(posts);

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
          navPath1={'account'}
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
                imageUrl={post.imageUrl}
                id={post.id}
                key={post.id}
                likes={post.likes}
                userLiked={post.userLiked}
                userId={post.userId}
                onDelete={onDeletePost}
                firstname={post.user.firstName}
                picture={post.user.imageUrl}
                createdAt={post.createdAt}
                modifiable={post.modifiable}
                onLikePost={onLikePost}
              />
            ))}
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
