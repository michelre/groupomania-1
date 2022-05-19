import '../styles/Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Post (props){
    return (
        <article className="post-container">
            <img className="post-img" alt={props.item.alt} src={`../images/${props.item.img}`}/>
            <h1 className="post-title">{props.item.title}</h1>
            <p className="post-description">{props.item.description}</p>
            {/*<FontAwesomeIcon icon="fas fa-thumbs-up" />
            <FontAwesomeIcon icon="far fa-grin-hearts" />
            <FontAwesomeIcon icon="fal fa-grin-tears" />*/}
        </article>
    )
}
