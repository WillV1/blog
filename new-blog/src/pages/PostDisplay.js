import Card from 'react-bootstrap/Card';

const PostDisplay = (props) => {
  console.log(props)

  const deletePost = () => {
    props.deletePost(props.post)
  }

  return (
    <Card>
    <Card.Body>
    <Card.Title>{props.post.title}</Card.Title>
    <Card.Text>
        {props.post.date}
      </Card.Text>
    <Card.Text>
        {props.post.text}
      </Card.Text>
    <button onClick={deletePost}>Delete Post</button>
    </Card.Body>
  </Card>
  )
}

export default PostDisplay;