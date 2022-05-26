export default class Api {

  constructor() {
    this.data = [
      {
        id: '1',
        img: 'team.webp',
        title: 'Team',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        alt: 'Team',
        likes: 2
      },
      {
        id: '2',
        img: 'pizza.jpg',
        title: 'Nouvelle pizzeria',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        alt: "Photo d'une pizza",
        likes: 1
      },
      {
        id: '3',
        img: 'cat.jpg',
        title: 'Working From Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        alt: "Photo d'un chat sur ordi",
        likes: 0
      },
    ]
  }


  getAllPosts() {
    return Promise.resolve(this.data);
  }

  getPostById(id){
    const post = this.data.find(p => p.id === id)
    return Promise.resolve(post)
  }

  login() {
    return Promise.resolve([
      {
        id: 'a1',
        email: 'ma@test.fr',
        password: '1234',
      },
    ]);
  }

  signin() {
    return Promise.resolve([
      {
        id: 'a1x',
        firstname: 'Maria',
        email: 'ma@test.fr',
        password: '1234',
        picture: 'https://pngimg.com/uploads/pokemon/pokemon_PNG14.png',
        department: 'Marketing',
      },
    ]);
  }
  createPost() {
    return Promise.resolve([
      {
        id: '1',
        img: 'team.webp',
        title: 'Team Building',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        alt: "Photo d'un groupe de collègues",
      },
    ]);
  }
  modifyPost() {
    return Promise.resolve();
  }
  deletePost() {
    return Promise.resolve();
  }
  likePost() {
    return Promise.resolve();
  }
  deleteUser() {
    return Promise.resolve();
  }
}
