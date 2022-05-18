import logo from './logos/icon-left-font-monochrome-white.png'
import '../styles/Banner.css'

export default function Banner(){
    return(
        <header className="banner">
            <img className="banner-img" src={logo} alt="Logo Groupomania"/>
            <h1 className="banner-title">Votre réseau social d'entreprise</h1>
        </header>
    )
}