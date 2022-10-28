import React from "react";
import Stories from "./Stories";

export default class TopStories extends React.Component {
  render() {
    return (
      <div className="container">
        <Stories type="top" />
      </div>
    );
  }
}
