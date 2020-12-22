import isEmptyObject from '../helpers/is-empty-object';

class PostService {
  static getPosts() {
    return fetch('http://localhost:3001/posts')
      .then((response) => response.json())
      .catch((error) => console.error(error));
  }

  static getPost(id) {
    return fetch(`http://localhost:3001/posts/${id}`)
      .then((response) => response.json())
      .then((data) => (isEmptyObject(data) ? null : data))
      .catch((error) => console.error(error));
  }

  static addPost(post) {
    // pokemon.created = new Date(pokemon.created);

    //if (this.isDev) {
    return fetch(`http://localhost:3001/posts`, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    // }

    // return new Promise((resolve) => {
    //   this.pokemons.push(pokemon);
    //   resolve(pokemon);
    // });
  }

  static updatePost(post) {
    // if (this.isDev) {
    return fetch(`http://localhost:3001/posts/${post.id}`, {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    // }

    // return new Promise((resolve) => {
    //   const { id } = pokemon;
    //   const index = this.pokemons.findIndex((pokemon) => pokemon.id === id);
    //   this.pokemons[index] = pokemon;
    //   resolve(pokemon);
    // });
  }

  static deletePost(id) {
    // return Promise.resolve();
    // if (this.isDev) {
    return fetch(`http://localhost:3001/posts/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    // }

    // return new Promise((resolve) => {
    //   const { id } = pokemon;
    //   this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    //   resolve({});
    // });
  }
}

export default PostService;
