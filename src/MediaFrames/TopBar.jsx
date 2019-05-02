import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {NewPost} from "../NewPost";

function TopBar(props) {
  return (
    <div className="row">
      <div className="col-md-3">
        <p>NekoGram!</p>
      </div>
      <div className="col-md-6">
        <p>
          <Link to="/"> Home </Link>|
          <Link to="/profile"> Profile </Link>|
          <Link to="/discover"> Discover </Link>|
          <Link to="/feed"> Feed </Link>
        </p>
      </div>
      <div className="col-md-3">
        <p>
          <Link to="/new_post" component={NewPost}>Post </Link>
          <Link to="/login">| Logout</Link>
        </p>
      </div>
    </div>
  )
}

export {TopBar};

