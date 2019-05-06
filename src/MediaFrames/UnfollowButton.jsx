import React, {Component} from "react";
import {connect} from "react-redux";
import {dataActions, userActions} from "../_actions";
import {get_username} from "../_helpers";

class UnfollowButton extends Component {
  constructor(props) {
    super(props);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  handleUnfollow() {
    const {dispatch} = this.props;
    const username = this.props.username;
    console.log("following ", username);
    dispatch(userActions.unfollow(username));
  }

  render() {
    const username = this.props.username;
    console.log("***", username);

    return (
      <div>
        <button onClick={this.handleUnfollow}>
          -Unfollow
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {MyFollow} = state;
  return {MyFollow};
}

const connectedUnfollowButton = connect(mapStateToProps)(UnfollowButton);

export {connectedUnfollowButton as UnfollowButton};
