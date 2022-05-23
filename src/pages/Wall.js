import Banner from '../components/Banner';
import Post from '../components/Post';
import data from '../data';
import Footer from '../components/Footer';

export default function Wall () {
    const posts = data.map(post => {
      return <Post
      key={post.id}
      item={post}
      />
    })
    return (
      <div>
      <Banner />
      {posts}
      <Footer />
      </div>
    );
  }