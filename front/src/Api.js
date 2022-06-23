export default class Api {
  //constructor() {}

  getAllPosts() {
    fetch('http://localhost:3001/api/posts', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
    })
      .then((post) => post.json())
      .then((response) => {
        try {
          console.log(response);
        } catch (error) {
          alert(
            'Une erreur est survenue, veuillez recommencer ultérieurement.'
          );
        }
      });
    return Promise.resolve();
  }

  getPostById(id) {
    fetch(`http://localhost:3001/api/posts/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
    })
      .then((post) => {
        return post.json();
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert("Le post n'a pas pu être trouvé");
        console.log(error);
      });
    return Promise.resolve();
  }

  getUserById(id) {
    const user = this.dataUser.find((u) => u.id === id);
    return Promise.resolve(user);
  }

  login({ email, password }) {
    fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
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

  createPost({ img, title, description }) {
    console.log(img, title, description);
    fetch('http://localhost:3001/api/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
      body: JSON.stringify({
        img,
        title,
        description,
      }),
    })
      .then((data) => data.json())
      .then((response) => {
        try {
          console.log(response);
        } catch (error) {
          alert(
            'Une erreur est survenue, veuillez recommencer ultérieurement.'
          );
        }
      });
    return Promise.resolve();
  }

  modifyPost({ img, title, description, id }) {
    console.log(img, title, description, id);
    fetch(`http://localhost:3001/api/posts/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
      body: JSON.stringify({
        img,
        title,
        description,
      }),
    })
      .then((data) => data.json())
      .then((response) => {
        try {
          console.log(response);
        } catch (error) {
          alert(
            'Une erreur est survenue, veuillez recommencer ultérieurement.'
          );
        }
      });
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
