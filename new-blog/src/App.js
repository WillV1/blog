import React from 'react';
import BlogModel from './models/blog';
import AddPost from './components/AddPost';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import Signup from './pages/Signup';
import Login from './pages/Login';
import BlogList from './components/BlogList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/').then(res => {
      console.log(res)
    })
    this.fetchData();
  };

  fetchData = () => {
    BlogModel.all().then((res) => {
      this.setState ({
        posts: res.data.posts
      })
    })
  };

  addNewPost = (post) => {
    const newPost = {
      post
    }

    BlogModel.create(newPost).then((res) => {
      let posts = [];
      console.log(posts)
      posts.push(res.data);
      this.setState({...posts})
    })
  };

  deletePost = (post) => {
    BlogModel.delete(post).then((res) => {
      let posts = this.state.posts.filter((post) => {
        return post._id !== res.data._id})
      this.setState({posts: posts})
    })
  };

  updatePost = (post) => {
    let updatedPost = item => {
      return item._id === post._id
    };

    BlogModel.update(post) 
      .then((res) => {
        let posts = this.state.posts;
        posts.find(updatedPost).body = post.body;
        this.setState({posts: posts})
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/addpost" render={(props) => <AddPost {...props} 
            addNewPost={this.addNewPost} />} />
            <Route path="/profile" component={Profile} />
            <Route path="/blog" 
            render={(props) => <BlogList {...props} 
            blogList={this.state.posts} />} />
            <Route path="/post/:id" 
            render={(props) => <BlogPost {...props} 
            blog={this.state.posts}
            addNewPost={this.addNewPost} 
            deletePost={this.deletePost}
            updatePost={this.updatePost}/>} />
          </Switch>
        </Router>
      </div>
    );
  }

    

}

export default App;
