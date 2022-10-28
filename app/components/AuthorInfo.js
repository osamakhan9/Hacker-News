import React from "react";
import formatDate from "../utils/time";
import { Link } from "react-router-dom";

export default function AuthorInfo({ by, comments, time, id }) {
  return (
    <div className="my-2">
      <p>
        <span className="">
          by
          <Link
            className="text-capitalize fw-bold mx-2"
            to={{
              pathname: "/user",
              search: `?id=${by}`,
            }}
          >
            {by}
          </Link>
        </span>
        on{formatDate(time)} with
        <span className="text-capitalize fw-bold mx-2">
          <Link
            className="mx-2"
            to={{ pathname: "/post", search: `?id=${id}` }}
          >
            {comments}
          </Link>
          comments
        </span>
      </p>
    </div>
  );
}
