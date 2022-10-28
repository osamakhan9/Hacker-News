import React from "react";
import { fetchComments, fetchItem } from "../utils/api";
import PostTitle from "./PostTitle";
import queryString from "query-string";
import AuthorInfo from "./AuthorInfo";
//changes in comments
export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: null,
      loading: true,
      error: null,
    };
  }
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    fetchItem(id)
      .then((item) => fetchComments(item.kids))
      .then((comment) =>
        this.setState({
          comment,
          loading: false,
        })
      )
      .catch((error) => this.setState({ error, loading: false }));
  }

  render() {
    const { loading, comment, error } = this.state;
    if (loading) {
      return <p>Loading</p>;
    }
    if (error) {
      return <p>there was an error {error}</p>;
    }
    return (
      <div>
        <ul>
          {comment.map((item) => (
            <li key={item.id} style={{ border: "1px solid #000" }}>
              <AuthorInfo by={item.by} time={item.time} />
              <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
