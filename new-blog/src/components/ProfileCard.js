import Card from 'react-bootstrap/Card';

const ProfileCard = (props) => {
  console.log(props)

  // const deletePost = () => {
  //   props.deletePost(props.post)
  // }

  return (
    <Card>
    <Card.Body>
    <Card.Title>{props.profile.email}</Card.Title>
    <Card.Text>{props.profile.username}</Card.Text>
    <Card.Text>
        My Bio: {props.profile.bio}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default ProfileCard;