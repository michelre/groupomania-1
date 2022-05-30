import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

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
      <Footer />
    </div>
  );
}
