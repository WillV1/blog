import React from 'react';
import BlogList from '../components/BlogList';

const BlogsContainer = (props) => {

    return (
      <div>
        <BlogList blogList={props.list} />
      </div>
    )
}

export default BlogsContainer;
