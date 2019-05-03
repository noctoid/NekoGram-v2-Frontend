import React, {Component} from "react";
import {connect} from "react-redux";
import {dataActions} from "../_actions";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike() {
    const {dispatch} = this.props;
    const pid = this.props.pid;
    console.log(pid);
    dispatch(dataActions.like(pid));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLike}>
          Like
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {myposts} = state;
  return {myposts};
}

const connectedLikeButton = connect(mapStateToProps)(LikeButton);

export {connectedLikeButton as LikeButton};
