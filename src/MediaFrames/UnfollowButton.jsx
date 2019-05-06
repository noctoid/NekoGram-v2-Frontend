import React, {Component} from "react";
import {connect} from "react-redux";
import {userActions} from "../_actions";


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
    return (
      <div>
        <button onClick={this.handleUnfollow}>
          Following
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
