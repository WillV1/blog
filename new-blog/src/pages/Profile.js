import React from 'react';
import axios from 'axios';
import ProfileCard from '../components/ProfileCard';

class Profile extends React.Component {

  state = {
    userProfile: {}
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/users/:id`)
      .then(res => {
        console.log(res.data)
        const userProfile = res.data;
        this.setState({userProfile})
      })
  }
  
  render() {
    return (
      <div>
        <ProfileCard profile={this.state.userProfile} />
      </div>
    );
  }
}
  
  export default Profile;