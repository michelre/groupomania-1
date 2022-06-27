import { handleApiResponse } from './utils';

export default class Api {
  getAllPosts() {
    return fetch('http://localhost:3001/api/posts', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
    }).then(handleApiResponse);
  }

  getPostById(id) {
    return fetch(`http://localhost:3001/api/posts/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
    }).then(handleApiResponse);
  }

  getUserById(id) {
    return fetch(`http://localhost:3001/api/auth/users/${id}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
    }).then(handleApiResponse);
  }

  login({ email, password }) {
    return fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(handleApiResponse);
  }

  signin({ email, password, firstName }) {
    const user = {
      firstName,
      email,
      password,
    };
    return fetch('http://localhost:3001/api/auth/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user,
      }),
    }).then(handleApiResponse);
  }

  createPost({ imageUrl, title, description, userId }) {
    console.log(imageUrl, title, description, userId);
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', imageUrl);
    return fetch('http://localhost:3001/api/posts', {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
      body: formData,
    }).then(handleApiResponse);
  }

  modifyPost({ img, title, description, id }) {
    console.log(img, title, description, id);
    return fetch(`http://localhost:3001/api/posts/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
        //il faut envoyer du FormData pr les images
      },
      body: JSON.stringify({
        img,
        title,
        description,
      }),
    }).then(handleApiResponse);
  }

  deletePost(id) {
    console.log(id);
    return fetch(`http://localhost:3001/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
    });
  }

  likePost(id, userId, like) {
    console.log(id, userId, like);
    fetch(`http://localhost:3001/api/posts/${id}/like`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
      body: JSON.stringify({
        userId,
        like,
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

  deleteUser(id) {
    console.log(id);
    fetch(`http://localhost:3001/api/auth/users/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
      },
    });
  }

  modifyUser({ firstName, picture, email, department, id }) {
    console.log(firstName, picture, email, department, id);
    return fetch(`http://localhost:3001/api/auth/users/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: 'Bearer ' + JSON.parse(localStorage.getItem('token')),
        //il faut envoyer du FormData pr les images
      },
      body: JSON.stringify({
        firstName,
        picture,
        email,
        department,
      }),
    }).then(handleApiResponse);
  }
}
