
import Banner from './components/Banner';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Post from './components/Post';
import data from './data';
import FormLogin from './components/FormLogin';
import Api from './Api'
import {useEffect, useState} from "react";
const api = new Api()


export default function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    api.getAllPosts().then(p => {
      setPosts(p)
    })
  }, [])

  return (
    <div>
    <Banner />
    <Nav />
    <FormLogin />
    {posts.map(post => <Post
        key={post.id}
        item={post}/>
        )}
    <Footer />
    </div>
  );
}


