import '../styles/FormLogin.css'
import {useState} from "react";
import Api from "../Api";
import { useNavigate } from "react-router-dom";

const api = new Api()

export default function FormLogin () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault()
        api.login().then(() => {
            navigate(`/wall/`)
        })
    }
    return (
        <form className="form-login" onSubmit={handleSubmit}>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <button type="submit" className="form-login-btn">Se connecter</button>
    </form>
    )
}