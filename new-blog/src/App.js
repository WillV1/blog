import React from 'react';
import NavBar from './components/NavBar'
import AddPost from './components/AddPost';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import Main from './pages/Main';
import Signup from './pages/Signup';
import Login from './pages/Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      postListing: [],
    }
  }

  addNewPost = (blogDate, blogTitle, blogText) => {

    const newPost = {
      date: blogDate,
      title: blogTitle,
      text: blogText
    }

    this.setState((prevState) => {
      const updatedTitleList = prevState.postListing.slice();
      updatedTitleList.push(newPost)

      console.log(newPost)

      return {postListing: updatedTitleList}
    })
  }

  deletePost = (post) => {
    let posts = this.state.postListing.filter((post) => {
      return post._id !== post._id
    })
    this.setState({posts})
  }

  render() {

    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/addpost" component={AddPost} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/blog" 
            render={(props) => <Main {...props} 
            list={this.state.postListing}
            addNewPost={this.addNewPost}
            />} />
            <Route path="/blog/:id" 
            render={(props) => <BlogPost {...props} 
            blog={this.state.postListing} deletePost={this.deletePost}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
