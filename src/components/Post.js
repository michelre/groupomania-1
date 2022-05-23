import '../styles/Post.css'

export default function Post (props){
    return (
        <article className="post-container">
            <img className="post-img" alt={props.item.alt} src={`../images/${props.item.img}`}/> 
            <h1 className="post-title">{props.item.title}</h1>
            <p className="post-description">{props.item.description}</p>
        </article>
    )
}