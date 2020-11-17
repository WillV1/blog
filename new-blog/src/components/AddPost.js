import React from 'react';

class AddPost extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      id: '',
      title: '',
      text: ''
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    this.props.addNewPost(this.state.id, this.state.title, this.state.text);

    this.setState({
      id: '',
      title: '',
      text: ''
    })

  }
  render() {
    return (
      <div>
        <h1>AddPost</h1>
        <form>
        <input name="id" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="number" />
          <input name="title" placeholder="Title" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="text" />
          <input name="text" placeholder="Text" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="text" />
          <input onClick={this.handleFormSubmit} type="submit" value="Add Post" />
        </form>
      </div>
    );
  }
}

export default AddPost;