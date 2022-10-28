import React from "react";
import queryString from "query-string";
import { fetchUser } from "../utils/api";
import formatDate from "../utils/time";
import Post from "./Post";
/*comment for hactoberfest challenge*/
export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);
    fetchUser(id)
      .then((data) =>
        this.setState({
          user: data,
          loading: false,
        })
      )
      .catch((error) =>
        this.setState({
          error,
        })
      );
  }
  render() {
    const { user, loading, error } = this.state;
    if (loading) {
      return <p>Loading</p>;
    }

    const createdAt = formatDate(user.created);
    return (
      <div>
        <div className="userProfile">
          <h2> {user.id}</h2>
          <p>
            joined{createdAt} has {user.karma} karma
          </p>
          <p>{user.about}</p>
        </div>
        <Post posts={user.submitted} />
      </div>
    );
  }
}
