import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../_actions';
import {dataActions} from "../_actions";

import {Posting} from "../MediaFrames/Posting";

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getMyPosts());
  };

  render() {
    const {myposts} = this.props;

    console.log("ProfilePage", this.props);

    return (
      <div>
        <h1>ProfilePage</h1>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const {myposts} = state;
  return {myposts};
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage);
export {connectedProfilePage as ProfilePage};
