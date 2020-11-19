import {Link} from "react-router-dom";

import Card from 'react-bootstrap/Card';

const BlogCard = (props) => {
  console.log(props)
  return (
    <Card>
    <Card.Body>
    <Link to={`/post/${props.blog._id}`}><Card.Title>{props.blog.title}</Card.Title></Link>
    </Card.Body>
  </Card>
  )
}

export default BlogCard;