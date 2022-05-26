import {useEffect, useState} from "react";

const FormPost = ({onCreatePost, post}) => {
    const [file, setFile] = useState('');
    const [title, setTitle] = useState(post ? post.title : '');
    const [description, setDescription] = useState(post ? post.description : '');

    const handleSubmit = () => {
        onCreatePost({
            title, file, description
        })
    }

    return (<form className="form-login" onSubmit={handleSubmit}>
        <h2>C'est parti! Créez ou modifiez vos posts!</h2>
        <input
            type="file"
            placeholder="Télécharger une image ou vidéo"
            value={file}
            onChange={(e) => setFile(e.target.value)}
        />
        <img src={file} />
        <input
            type="text"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="form-login-btn">
            Publier
        </button>
        <img src="..\images\discuss.jpg" alt="Bavardages" />
    </form>)
}

export default FormPost

