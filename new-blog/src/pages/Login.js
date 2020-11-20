import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post(`http://localhost:3001/login`, {user})
    .then(res => {
      console.log(res)
      if (res.data) {
        this.props.history.push('/blog')
      } else {
        console.log('Sign-up error')
      }
    })
    .catch(err => {
      console.log('Sign-up error')
      console.log(err)
    }) 
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Email" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="email" />
          <label htmlFor="password">Password</label>
          <input name="password" placeholder="Text" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="password" />
          <input onClick={this.handleFormSubmit} type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;