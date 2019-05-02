import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {NewPost} from "../NewPost";

function TopBar(props) {
  return (
    <div className="row topbar topnav">
      <div className="col-md-3">
        <Link to="/">NekoGram!</Link>
      </div>
      <div className="col-md-6">
        <p>
          <Link to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span> Home</Link>
          <Link to="/profile"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Profile</Link>
          <Link to="/discover"><span className="glyphicon glyphicon-search" aria-hidden="true"></span> Discover</Link>
          <Link to="/feed"><span className="glyphicon glyphicon-gift" aria-hidden="true"></span> Feed</Link>
        </p>
      </div>
      <div className="col-md-3">
        <p>
          <Link to="/new_post" component={NewPost}>Post</Link>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    </div>
  )
}

export {TopBar};

