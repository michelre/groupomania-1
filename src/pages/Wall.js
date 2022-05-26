import Banner from '../components/Banner';
import Post from '../components/Post';
import Api from '../Api';
import Footer from '../components/Footer';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
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

    const onDeletePost = (id) => {
        //API CALL
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce post?')) {
            api.deletePost().then(() => {
                const newPosts = posts.filter(p => p.id !== id)
                setPosts(newPosts)
            })

        }
    }

    const onLikePost = (id) => {
        api.likePost(id).then(() => {
            const newPosts = posts.map(p => {
                if (p.id === id) {
                    return {...p, likes: p.likes + 1}
                }
                return p
            })
            setPosts(newPosts)
        });
    }

    return (
        <div>
            <Banner/>
            <main className="container">
                <h2>De quoi souhaitez-vous discuter?</h2>
                <Link to="posts">
                    <button type="submit" className="form-login-btn form-login">
                        Créer un post
                    </button>
                </Link>
                {posts.map((post) => (
                    <Post
                        alt={post.alt}
                        title={post.title}
                        description={post.description}
                        img={post.img}
                        id={post.id}
                        key={post.id}
                        likes={post.likes}
                        onDelete={onDeletePost}
                        onLike={onLikePost}
                    />
                ))}
                <DeleteUser/>
            </main>
            <Footer/>
        </div>
    );
}
