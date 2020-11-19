import axios from 'axios';
const url = `http://localhost:3001/blogs`

class BlogModel {
  static all = () => {
    let request = axios.get(url)
    return request;
  };

  static create = (post) => {
    let request = axios.post(url, post);
    return request
  };

  static delete = (post) => {
    let request = axios.delete(`${url}/${post._id}`);
    return request;
  };

  static update = (post) => {
    let request = axios.put(`${url}/${post._id}`, post);
    return request;
  }

}

export default BlogModel;