import React from "react";
import { fetchMainPosts } from "../utils/api";
import PostTitle from "./PostTitle";
import AuthorInfo from "./AuthorInfo";

function Story({ post }) {
  return (
    <ul>
      {post.map((story) => {
        const { title, by, id, url, time, descendants } = story;

        return (
          <li key={id} className="card p-4 border-0 border-bottom m-3">
            <PostTitle title={title} url={url} />
            <AuthorInfo id={id} by={by} time={time} comments={descendants} />
          </li>
        );
      })}
    </ul>
  );
}
export default class Stories extends React.Component {
  state = {
    top: null,
    error: null,
    loading: true,
  };
  componentDidMount() {
    const type = this.props.type;
    this.updateStories(type);
  }
  updateStories = (type) => {
    fetchMainPosts(type)
      .then((data) =>
        this.setState({
          top: data,
          loading: false,
        })
      )
      .catch((err) =>
        this.setState({
          error: err,
          loading: false,
        })
      );
  };
  render() {
    const { top, error, loading } = this.state;
    return (
      <div className="container">
        {loading && (
          <div class="spinner-border text-info" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
        {error && <div> there occured an error{error}</div>}
        {top && <Story post={top} />}
      </div>
    );
  }
}
