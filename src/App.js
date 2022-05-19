
import Banner from './components/Banner';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Post from './components/Post';
import data from './data';
import FormLogin from './components/FormLogin';




export default function App() {
  const posts = data.map(post => {
    return <Post
    key={post.id}
    item={post}
    />
  })
  return (
    <div>
    <Banner />
    <Nav />
    <FormLogin />
    {posts}
    <Footer />
    </div>
  );
}


