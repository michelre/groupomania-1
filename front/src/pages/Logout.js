import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Nav from '../components/Nav';

export default function Logout() {
  localStorage.clear();
  return (
    <div>
      <Banner />
      <Nav />
      <h1>A Bientôt!</h1>
      <Footer />
    </div>
  );
}
