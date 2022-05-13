
import Banner from './Banner';
import Nav from './Nav';
import Post from './Post';


export default function App() {
  return (
    <div>
    <Banner />,
    <Nav />,
    <Post
      img="/logos/icon.png"
      title="test"
      description="test description"
    />,
    <Post
      img="/logos/icon.png"
      title="test 2"
      description="test 2 description"
    />,
    </div>
  );
}


