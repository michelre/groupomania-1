
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

login(){
    return Promise.resolve(
        [
            {
                id:"a1",
                email:"ma@test.fr",
                password:"1234",
            }
        ]
    )
}

signin(){
    return Promise.resolve(
        [
            {
                id:"a1x",
                firstname:"Maria",
                email:"ma@test.fr",
                password:"1234",
                picture:"https://pngimg.com/uploads/pokemon/pokemon_PNG14.png",
                department:"Marketing",
            }
        ]
    )
}
createPost(){
    return Promise.resolve(
        [
            {
                id: "1",
                img:"team.webp",
                title:"Team Building",
                description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                alt:"Photo d'un groupe de collègues",
            }
        ]    
    )
} 
}