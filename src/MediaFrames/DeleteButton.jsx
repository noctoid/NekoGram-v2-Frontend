import React, {Component} from "react";
import {connect} from "react-redux";
import {dataActions} from "../_actions";

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    const {dispatch} = this.props;
    const pid = this.props.pid;
    console.log(pid);
    dispatch(dataActions.deleteP(pid));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDelete}>
          Delete
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {myposts} = state;
  return {myposts};
}

const connectedDeleteButton = connect(mapStateToProps)(DeleteButton)

export {connectedDeleteButton as DeleteButton};
