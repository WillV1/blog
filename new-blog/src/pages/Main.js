import React from 'react';
import BlogList from '../components/BlogList';
import AddPost from '../components/AddPost';

class Main extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      postListing: [],
    }
  }

  addNewTitle = (blogTitle, blogText) => {

    const newPost = {
      title: blogTitle,
      text: blogText
    }

    this.setState((prevState) => {
      const updatedTitleList = prevState.postListing.slice();
      updatedTitleList.push(newPost)

      return {postListing: updatedTitleList}
    })
  }
  
  render() {
    return (
      <div>
        <h1>Blog</h1>
        <AddPost addNewTitle={this.addNewTitle}/>
        {/*this.getTitles(this.state.postListing)*/}
        <BlogList blogList={this.state.postListing} />
      </div>
    );
  }
}

export default Main;