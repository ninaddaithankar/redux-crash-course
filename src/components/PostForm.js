import React, { Component } from "react";

export class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  render() {
    return (
      <div style={formStyle}>
        <h2>Add Post</h2>
        <form style={formStyle} onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Enter Title'
            name='title'
            onChange={this.onChange}
            value={this.state.title}
          ></input>
          <br />
          <br />
          <input
            type='text'
            placeholder='Enter Post'
            onChange={this.onChange}
            name='body'
            value={this.state.body}
          ></input>
          <br />
          <br />
          <input type='submit' value='Add'></input>
        </form>
      </div>
    );
  }
}

const formStyle = {
  padding: "1em"
};

export default PostForm;
