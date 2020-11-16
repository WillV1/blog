import {
  BrowserRouter as Router, Route, Link } from "react-router-dom";
import BlogPost from '../pages/BlogPost';

function BlogList(props) {

const blogList = props.blogList.map((blog, index) => {
      return <Link key={index} 
      to={{pathname: '/blog/'+index}}>{blog.title}</Link>
    }) 

const post = props.blogList.map((blog, index) => {
      return <BlogPost blog={blog} />
    }) 

  return (
    <div>
    <Router>
      {blogList}
      <Route path="/blog/:index">{post}</Route> 
    </Router>
    </div>
  );
}

export default BlogList;