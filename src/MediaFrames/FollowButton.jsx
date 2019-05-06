import React, {Component} from "react";
import {connect} from "react-redux";
import {dataActions, userActions} from "../_actions";
import {get_username} from "../_helpers";

class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.handleFollow = this.handleFollow.bind(this);
  }

  handleFollow() {
    const {dispatch} = this.props;
    const username = this.props.username;
    console.log("following ", username);
    dispatch(userActions.follow(username));
  }

  render() {
    const username = this.props.username;
    console.log(username, "==", get_username());

    if (username === get_username()) {
      return (
        <div></div>
      );
    }

    return (
      <div>
        <button onClick={this.handleFollow}>
          +Follow
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {MyFollow} = state;
  return {MyFollow};
}

const connectedFollowButton = connect(mapStateToProps)(FollowButton);

export {connectedFollowButton as FollowButton};
