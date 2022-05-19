import '../styles/FormLogin.css'

export default function FormLogin () {
    function handleSubmit() {
        console.log("Form submitted")
    }
    return (
        <form className="form-login">
            <input type="text" placeholder="Email"/>
            <input type="text" placeholder="Mot de passe"/>
            <button type="submit" className="form-login-btn" onClick={handleSubmit} >login</button>
        </form>
    )
}