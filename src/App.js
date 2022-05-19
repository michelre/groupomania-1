
import Banner from './components/Banner';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Post from './components/Post';
import data from './data';




export default function App() {
  const posts = data.map(post => {
    return <Post
    key={post.id}
    item={post}
    /*img={post.img}
    title={post.title}
    description={post.description}
    alt={post.alt}*/
    />
  })
  return (
    <div>
    <Banner />
    <Nav />
    {posts}
    <Footer />
    </div>
  );
}


