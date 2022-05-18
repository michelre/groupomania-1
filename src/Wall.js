import Banner from './components/Banner';
import Post from './components/Post';
import data from './data';
import Footer from './components/Footer';

export default function Wall () {
    const posts = data.map(post => {
      return <Post
      id={post.id}
      img={post.img}
      title={post.title}
      description={post.description}
      alt={post.alt}
      />
    })
    return (
      <div>
      <Banner />,
      {posts},
      <Footer />,
      </div>
    );
  }
  
  
  