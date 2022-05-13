import '../styles/Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Post (props){
    return (
        <article className="post-container">
            <img className="post-img" src={props.image}/> 
            <h1 className="post-title">{props.title}</h1>
            <p className="post-description">{props.description}</p>
            <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />

        </article>
    )
}