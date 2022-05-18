import Banner from './components/Banner';
import Post from './components/Post';
import data from './data';
import Footer from './components/Footer';

export default function Wall () {
    const posts = data.map(post => {
      return <Post
      id={data.id}
      img={data.img}
      title={data.title}
      description={data.description}
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
  
  
  