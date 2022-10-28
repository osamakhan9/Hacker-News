import React from "react";

export default function PostTitle({ url, title }) {
  return (
    <div className="">
      <h2>
        <a href={url}> {title}</a>
      </h2>
    </div>
  );
}
