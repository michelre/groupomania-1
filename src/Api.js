
export default class Api{

getAllPosts(){
    return Promise.resolve(
        [
            {
                id: "1",
                img:"team.webp",
                title:"Team Building",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                alt:"Photo d'un groupe de collègues",
            },
            {
                id:"2",
                img:"pizza.jpg",
                title:"Nouvelle pizzeria",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                alt:"Photo d'une pizza",
            },
            {
                id:"3",
                img:"cat.jpg",
                title:"Working From Home",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                alt:"Photo d'un chat sur ordi",
            }
        ]
    )
}

signIn(){
    return Promise.resolve()
}

} 