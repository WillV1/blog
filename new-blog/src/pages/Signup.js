import React from 'react';

class Signup extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    const user = {
      username: this.state.username,
      password: this.state.password
    }

    axios.post(`http://localhost:3001/register`, {user})
      .then(res => {
        console.log(res);
        console.log(res.data)
      })
  }

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input name="username" placeholder="Username" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="text" />
          <label htmlFor="password">Password</label>
          <input name="password" placeholder="Text" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="password" />
          <input onClick={this.handleFormSubmit} type="submit" value="Signup" />
        </form>
      </div>
    );
  }
}

export default Signup;