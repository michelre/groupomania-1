import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Nav from '../components/Nav';

export default function Logout() {
    localStorage.clear();
    return (
        <div>
            <Banner/>
            <Nav
                navName1={'Se connecter'}
                navPath1={'/login'}
                navName2={'Créer un compte'}
                navPath2={'/signin'}
            />
            <h1>A Bientôt!</h1>
            <Footer/>
        </div>
    );
}
