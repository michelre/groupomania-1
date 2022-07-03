import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/index.css';

export default function Home() {
  return (
    <div>
      <Banner />
      <Nav
        navName1={'Se connecter'}
        navPath1={'login'}
        navName2={'Créer un compte'}
        navPath2={'signin'}
      />
      <h2 className="home-title">
        Un lieu convivial pour échanger entre collègues et apprendre à mieux
        nous connaitre!
      </h2>
      <img
        src={'../images/illustration.webp'}
        alt="illustration network"
        className="home-illustration"
      />
      <img src={'../images/office.jpg'} alt="office" className="home-img" />
      <Footer />
    </div>
  );
}
