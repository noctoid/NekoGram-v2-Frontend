import React from 'react';
import {connect} from 'react-redux';

import {userActions} from '../_actions';

class ProfilePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getProfile());
  };

  render() {
    const {profile} = this.props;

    console.log("ProfilePage", this.props);

    return (
      <div>
        <h1>ProfilePage</h1>
        {/*{profile.userid}*/}
      </div>
    );
  }
}


function mapStateToProps(state) {
  const {profile} = state;
  return {profile};
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage);
export {connectedProfilePage as ProfilePage};
