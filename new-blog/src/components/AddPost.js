import React from 'react';

class AddPost extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      date: '',
      title: '',
      text: ''
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    // this.props.addNewPost(this.state.date, this.state.title, this.state.text);

    const post = {
      date: this.state.date,
      title: this.state.title,
      text: this.state.text
    }

    axios.post(`http://localhost:3001/blogs`, {post})
      .then(res => {
        console.log(res);
        console.log(res.data)
      })

  }
  render() {
    return (
      <div>
        <h1>AddPost</h1>
        <form>
        <input name="date" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="date" />
          <input name="title" placeholder="Title" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="text" />
          <input name="text" placeholder="Text" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="text" />
          <input onClick={this.handleFormSubmit} type="submit" value="Add Post" />
        </form>
      </div>
    );
  }
}

export default AddPost;