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

    

    let post = {
      date: this.state.date,
      title: this.state.title,
      text: this.state.text
    }

    this.props.addNewPost(post);

    this.props.history.push('/blog');

  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <label htmlFor="date">Blog Date</label>
          <input name="date" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="date" />
          <label htmlFor="title">Blog Title</label>
          <input name="title" placeholder="Title" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="text" />
          <label htmlFor="text">Blog Text</label>
          <input name="text" placeholder="Text" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="text" />
          
          <input onClick={this.handleFormSubmit} type="submit" value="Add Post" />
        </form>
      </div>
    );
  }
}

export default AddPost;