import React from 'react';
import NavBar from './components/NavBar'
import AddPost from './components/AddPost';
import Profile from './pages/Profile';
import BlogPost from './pages/BlogPost';
import Main from './pages/Main';
// import BlogItem from './components/BlogItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     postListing: [],
  //   }
  // }

  // addNewTitle = (blogTitle) => {

  //   const newTitle = {title: blogTitle}

  //   this.setState((prevState) => {
  //     const updatedTitleList = prevState.postListing.slice();
  //     updatedTitleList.push(newTitle)

  //     return {postListing: updatedTitleList}
  //   })
  // }

  // getTitles(titles) {
  //   return titles.map((blog, index) => {
  //     return <BlogItem key={index} blog={blog} />
  //   })
  // }
  
  render() {
    return (
      <div>
        <NavBar />
        <h1>Blog</h1>
        <Router>
          <Switch>
            <Route path="/addpost">
              <AddPost addNewTitle={this.addNewTitle}/>
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/home">
              <Main />
            </Route>
            <Route path="/blog">
              <BlogPost />
            </Route>
          </Switch>
        </Router>
        {/*this.getTitles(this.state.postListing)*/}
      </div>
    );
  }
}

export default App;
