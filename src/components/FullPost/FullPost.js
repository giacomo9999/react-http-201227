import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = { loadedPost: { id: null } };

  componentDidUpdate() {
    if (this.props.postId !== this.state.loadedPost.id) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + this.props.postId)
        .then((response) => {
          this.setState({ loadedPost: response.data });
          console.log(this.state);
        });
    }
  }

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;

    if (this.props.postId) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }

    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete">Delete</button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
