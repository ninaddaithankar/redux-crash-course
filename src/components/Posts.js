import React, { Component } from "react";

export class Posts extends Component {
  state = {
    posts: [],
    post: {}
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(posts =>
        this.setState({
          posts
        })
      );
  }
  render() {
    return (
      <div style={postStyle}>
        <h2>Posts</h2>
        {this.state.posts.map(post => (
          <div style={postStyle}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

const postStyle = {
  padding: "1em",
  border: " 1px solid green"
};

export default Posts;
