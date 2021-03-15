import axios from 'axios';

export const HTTP = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  json: true
});

export const BookAPI =  {
  createBook(book) {
    book.Rating = parseInt(book.Rating)
    return this.perform('post', '/book', book);
  },

  async perform (method, resource, data) {
    // let accessToken = await Vue.prototype.$auth.getAccessToken()
    return HTTP({
      method,
      url: resource,
      data,
      // headers: {
      //   Authorization: `Bearer ${accessToken}`
      // }
    }).then(req => {
      return req.data
    })
  }
}