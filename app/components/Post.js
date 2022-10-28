import React from "react";
import { fetchPosts } from "../utils/api";
import PostTitle from "./PostTitle";
import AuthorInfo from "./AuthorInfo";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      loading: true,
      error: false,
    };
  }
  componentDidMount() {
    const { posts } = this.props;

    fetchPosts(posts)
      .then((data) =>
        this.setState({
          post: data,
          loading: false,
        })
      )
      .catch((err) =>
        this.setState({
          error: err,
          loading: false,
        })
      );
  }

  render() {
    const { post, loading, error } = this.state;
    if (loading) {
      return <p>Loading</p>;
    }
    if (error) {
      return <p>{error} there was a error</p>;
    }
    return (
      <React.Fragment>
        <ul>
          {post &&
            post.map((item) => (
              <li key={item.id}>
                <PostTitle url={item.url} title={item.title} />
                <AuthorInfo
                  id={item.id}
                  by={item.by}
                  time={item.time}
                  comments={item.descendants}
                />
              </li>
            ))}
        </ul>
      </React.Fragment>
    );
  }
}
