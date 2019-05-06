import React from "react";
import {FollowButton} from "./FollowButton";
import {UnfollowButton} from "./UnfollowButton";
import {get_uid} from "../_helpers";

function BriefProfile(props) {
  console.log(props);
  let following;
  const {avatarUrl, displayName, username, quote, followers, isFollowing} = props;
  // console.log("Follower", props.followers);
  // props.followers.map((follower, index) => {
  //   if (follower === get_uid()) {
  //     following = true;
  //   }
  // });
  console.log(isFollowing);

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
      <p>{followers}</p>
      {followButton}
    </div>
  );
}

export {BriefProfile};
