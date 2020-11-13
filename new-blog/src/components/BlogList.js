import {Link} from "react-router-dom";
import BlogPost from '../pages/BlogPost';

function BlogList(props) {

const blogList = props.blogList.map((blog, index) => {
      return <BlogPost key={index} blog={blog} />
    }) 

  return (
    <div>
    </div>
  );
}

export default BlogList;