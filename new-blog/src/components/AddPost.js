import React from 'react';

class AddPost extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      title: '',
      text: ''
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()

    this.props.addNewTitle(this.state.title);

    this.setState({
      title: '',
      text: ''
    })

  }
  render() {
    return (
      <div>
        <h1>AddPost</h1>
        <form>
          <input name="title" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="text" />
          <input name="text" onChange={(e) => this.setState({[e.target.name]: e.target.value})} type="text" />
          <input onClick={this.handleFormSubmit} type="submit" value="Add Post" />
        </form>
      </div>
    );
  }
}

export default AddPost;