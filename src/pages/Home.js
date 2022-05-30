import Banner from '../components/Banner';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <body>
      <Banner />
      <Nav
        navName1={'Se connecter'}
        navPath1={'login'}
        navName2={'Créer un compte'}
        navPath2={'signin'}
      />
      <img src={'../images/office.jpg'} alt="office" className="home-img" />
      <Footer />
    </body>
  );
}
