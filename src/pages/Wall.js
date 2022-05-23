import Banner from '../components/Banner';
import Post from '../components/Post';
import Api from '../Api';
import Footer from '../components/Footer';
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const api = new Api()


export default function Wall () {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    api.getAllPosts().then(p => {
      setPosts(p)
    })
  }, [])
    return (
      <div>
      <Banner />
      <Link to="createpost">
        <button type="submit" className="form-login-btn">Créer un post</button>
      </Link>
      {posts.map(post => <Post
        key={post.id}
        item={post}/>
        )}
      <Footer />
      </div>
    );
  }