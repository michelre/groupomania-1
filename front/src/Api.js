export default class Api {
  /*constructor() {
    
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
  }*/

  getAllPosts() {
    fetch('http://localhost:3001/api/posts', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
    })
      .then((data) => data.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    return Promise.resolve();
  }

  getPostById(id) {
    const post = this.data.find((p) => p.id === id);
    return Promise.resolve(post);
  }

  getUserById(id) {
    const user = this.dataUser.find((u) => u.id === id);
    return Promise.resolve(user);
  }

  login({ email, password }) {
    fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      //mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((data) => data.json())
      .then((response) => {
        try {
          const token = response.token;
          localStorage.setItem('token', JSON.stringify(token));
        } catch (error) {
          alert(
            'Une erreur est survenue, veuillez recommencer ultérieurement.'
          );
        }
      });
    return Promise.resolve();
  }

  signin({ email, password, firstName }) {
    const user = {
      firstName,
      email,
      password,
    };
    fetch('http://localhost:3001/api/auth/signin', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
      }),
    })
      .then((data) => data.json())
      .then((response) => {
        try {
          response.json();
        } catch (error) {
          alert(
            'Une erreur est survenue, veuillez recommencer ultérieurement.'
          );
        }
      });
    return Promise.resolve();
  }

  createPost({ title, file, description }) {
    fetch('http://localhost:3001/api/posts', {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
      body: JSON.stringify({
        title,
        file,
        description,
      }),
    })
      .then((data) => data.json())
      .then((response) => {
        try {
          response.json();
        } catch (error) {
          alert(
            'Une erreur est survenue, veuillez recommencer ultérieurement.'
          );
        }
      });
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
