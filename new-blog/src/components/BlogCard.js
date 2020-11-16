import {Link} from "react-router-dom";
import BlogPost from '../pages/BlogPost';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const BlogCard = (props) => {
  return (
    <Card>
    <Card.Body>
      <Card.Title>{props.blog.title}</Card.Title>
      {/*<Card.Text>
        With supporting text below as a natural lead-in to additional content.
      </Card.Text>*/}
      <Link to='/blog/'>
        <Button variant="primary">
          See Post</Button>
      </Link>
    </Card.Body>
  </Card>
  )
}

export default BlogCard;