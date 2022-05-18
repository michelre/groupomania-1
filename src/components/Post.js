import '../styles/Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Post (props){
console.log(props)
    return (
        <article className="post-container">
            <img className="post-img" src={`./public/images/${props.img}`}/> 
            <h1 className="post-title">{props.title}</h1>
            <p className="post-description">{props.description}</p>
            <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
            <FontAwesomeIcon icon="fas fa-thumbs-up" />
            <FontAwesomeIcon icon="far fa-grin-hearts" />

        </article>
    )
}