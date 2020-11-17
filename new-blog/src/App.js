import React from 'react';
import NavBar from './components/NavBar'
import AddPost from './components/AddPost';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import Main from './pages/Main';

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

  addNewPost = (blogId, blogTitle, blogText) => {

    const newPost = {
      id: blogId,
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

  render() {

    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route path="/addpost" component={AddPost} />
            <Route path="/profile" component={Profile} />
            <Route exact path="/blog" 
            render={(props) => <Main {...props} 
            list={this.state.postListing}
            addNewPost={this.addNewPost}
            />} />
            <Route path="/blog/:id" 
            render={(props) => <BlogPost {...props} 
            blog={this.state.postListing} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
