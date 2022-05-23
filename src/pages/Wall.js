import Banner from '../components/Banner';
import Post from '../components/Post';
import Api from '../Api';
import Footer from '../components/Footer';
import {useEffect, useState} from "react";

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
      {posts.map(post => <Post
        key={post.id}
        item={post}/>
        )}
      <Footer />
      </div>
    );
  }