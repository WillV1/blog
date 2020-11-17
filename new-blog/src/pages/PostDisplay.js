import Card from 'react-bootstrap/Card';

const PostDisplay = (props) => {
  console.log(props)
  return (
    <Card>
    <Card.Body>
    <Card.Title>{props.post.title}</Card.Title>
    <Card.Text>
        {props.post.text}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default PostDisplay;