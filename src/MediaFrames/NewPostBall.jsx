import React from "react";
import {Link} from "react-router-dom";
import {NewPost} from "../NewPost";

function NewPostBall(props) {
  return (
    <div className="bottom-right ball">
      <p>
        <Link to="/new_post">
          <img className="avatar-md" src="http://icons.iconarchive.com/icons/danleech/simple/512/livejournal-icon.png"/>
        </Link>
      </p>
    </div>
  )
}

export {NewPostBall};
