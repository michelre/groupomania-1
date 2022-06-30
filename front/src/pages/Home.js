import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import '../styles/index.css';

export default function Home() {
  const h2style = { padding: '20px', maxWidth: '1920px', margin: ' auto' };
  return (
    <div>
      <Banner />
      <Nav
        navName1={'Se connecter'}
        navPath1={'login'}
        navName2={'Créer un compte'}
        navPath2={'signin'}
      />
      <h2 style={h2style}>
        Bienvenue sur votre réseau social d'entreprise! Un lieu convivial pour
        échanger entre collègues et apprendre à mieux nous connaitre!
      </h2>
      <img src={'../images/office.jpg'} alt="office" className="home-img" />
      <Footer />
    </div>
  );
}
