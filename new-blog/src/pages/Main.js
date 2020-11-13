import React from 'react';
import BlogList from '../components/BlogItem';
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
        <AddPost addNewTitle={this.addNewTitle}/>
        {/*this.getTitles(this.state.postListing)*/}
        <BlogList blogList={this.state.blogs} />
      </div>
    );
  }
}

export default Main;