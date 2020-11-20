import React from 'react';
import BlogModel from './models/blog';
import AddPost from './components/AddPost';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import Signup from './pages/Signup';
import Login from './pages/Login';
import BlogsContainer from './containers/BlogsContainer';

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
      postListing: []
    }
  }

  componentDidMount() {
    this.fetchData();
  };

  fetchData = () => {
    BlogModel.all().then((res) => {
      this.setState ({
        postListing: res.data.blogs
      })
    })
  };

  addNewPost = (post) => {
    const newPost = {
      body: post
    }

    BlogModel.create(newPost).then((res) => {
      let posts = this.state.postListing;
      posts.push(res.data);
      this.setState({postListing: posts})
      .then((res) => {
        this.props.history.push('/blog')
      })
    })
  };

  deletePost = (post) => {
    BlogModel.delete(post).then((res) => {
      let posts = this.state.postListing.filter((post) => {
        return post._id !== res.data._id})
      this.setState({postListing: posts})
    })
  };

  updatePost = (post) => {
    let updatedPost = item => {
      return item._id === post._id
    };

    BlogModel.update(post) 
      .then((res) => {
        let posts = this.state.postListing;
        posts.find(updatedPost).body = post.body;
        this.setState({postListing: posts})
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
            <Route path="/addpost" component={AddPost} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/blog" 
            render={(props) => <BlogsContainer {...props} 
            list={this.state.postListing} />} />
            <Route path="/post/:id" 
            render={(props) => <BlogPost {...props} 
            blog={this.state.postListing} 
            deletePost={this.deletePost}
            updatePost={this.updatePost}/>} />
          </Switch>
        </Router>
      </div>
    );
  }

    

}

export default App;
