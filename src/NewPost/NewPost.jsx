import React from 'react';
import { connect } from 'react-redux';

class NewPost extends React.Component {
  render() {
    return (
      <div>
        NewPost Component
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { new_post } = state;
  return { new_post };
}

const connectedNewPost = connect(mapStateToProps)(NewPost);
export {connectedNewPost as NewPost};
