import React from "react";
import {FollowButton} from "./FollowButton";
import {UnfollowButton} from "./UnfollowButton";

function BriefProfile(props) {


  const {avatarUrl, displayName, username, quote, numFollowers, numFollowing, numPostings, isFollowing} = props;

  let followButton;

  if (isFollowing === "following") {
    followButton = (<UnfollowButton username={username}/>);
  } else if (isFollowing === "not_following") {
    followButton = (<FollowButton username={username}/>);
  }

  return (
    <div className="col-md-3 col-sm-12">
      <img src={avatarUrl} className="img-responsive avatar-lg" alt="No Avatar"/>
      <h3>{displayName}</h3>
      <h5>@{username}</h5>
      <p>{quote}</p>

      <div className="row">
        <div className="col-md-4">
          <label>Postings</label> {numPostings}
        </div>
        <div className="col-md-4">
          <label>Following</label> {numFollowing}
        </div>
        <div className="col-md-4">
          <label>Followers</label> {numFollowers}
        </div>
      </div>
      <br/>
      {followButton}
    </div>
  );
}

export {BriefProfile};
