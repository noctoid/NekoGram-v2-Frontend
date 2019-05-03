import React from "react";
import {Link} from "react-router-dom";
import {NewPost} from "../NewPost";

function NewPostBall(props) {
  return (
    <div className="bottom-right ball">
      <p>
        <Link to="/new_post">
          <img className="avatar-lg" src="https://s3-us-west-2.amazonaws.com/noctoid/media/icons8-pencil-drawing-48.png"/>
        </Link>
      </p>
    </div>
  )
}

export {NewPostBall};
