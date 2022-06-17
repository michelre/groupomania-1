export default class Api {
  constructor() {
    this.data = [
      {
        id: '1',
        img: 'team.webp',
        title: 'Team',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        alt: 'Team',
        likes: 2,
        loves: 1,
      },
      {
        id: '2',
        img: 'pizza.jpg',
        title: 'Nouvelle pizzeria',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        alt: "Photo d'une pizza",
        likes: 1,
        loves: 0,
      },
      {
        id: '3',
        img: 'cat.jpg',
        title: 'Working From Home',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        alt: "Photo d'un chat sur ordi",
        likes: 0,
        loves: 3,
      },
    ];
    this.dataUser = [
      {
        firstname: 'Pikachu',
        picture: 'https://pngimg.com/uploads/pokemon/pokemon_PNG14.png',
        email: 'pika@groupomania.com',
        department: 'Tech',
        alt: 'Pikachu',
        id: 1,
      },
    ];
  }

  getAllPosts() {
    return Promise.resolve(this.data);
  }

  getPostById(id) {
    const post = this.data.find((p) => p.id === id);
    return Promise.resolve(post);
  }

  getUserById(id) {
    const user = this.dataUser.find((u) => u.id === id);
    return Promise.resolve(user);
  }

  login() {
    return Promise.resolve();
  }

  signin() {
    return Promise.resolve();
  }

  createPost() {
    return Promise.resolve();
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

  modifyUser() {
    return Promise.resolve();
  }
}
