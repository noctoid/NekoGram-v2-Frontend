import React from "react";

function BriefProfile(props) {
  return (
    <div className="col-md-3 col-sm-12">
      <img src={props.avatarUrl} className="img-responsive avatar-lg"/>
      <h3>{props.displayName}</h3>
      <h5>@{props.username}</h5>

    </div>
  );
}

export {BriefProfile};
