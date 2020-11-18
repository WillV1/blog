import React from 'react';
import BlogList from '../components/BlogList';
import AddPost from '../components/AddPost';

function Main (props) {

    return (
      <div>
        <h1>Blog</h1>
        <AddPost addNewPost={props.addNewPost}/>
        <BlogList blogList={props.list} />
      </div>
    );

}

export default Main;