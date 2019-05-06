import React from 'react';
import {connect} from 'react-redux';

import {userActions} from '../_actions';

import {Posting} from "../MediaFrames/Posting";

import {TopBar} from "../MediaFrames/TopBar";
import {BriefProfile} from "../MediaFrames/BriefProfile";
import {NewPostBall} from "../MediaFrames/NewPostBall";

class UserPage extends React.Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    console.log(params.get("username"));
    this.props.dispatch(userActions.getUserPosts(params.get("username")));
    this.props.dispatch(userActions.getUserProfile(params.get("username")));
  };

  render() {
    const {posts, profile} = this.props;

    return (
      <div>
        <div>
          <TopBar/>
          <div className="row page-content">
            <BriefProfile avatarUrl={profile.items && profile.items.avatarUrl}
                          displayName={profile.items && profile.items.displayName}
                          username={profile.items && profile.items.username}
                          quote={profile.items && profile.items.quote}
                          numFollowers={profile.items && profile.items.followers.length}
                          numFollowing={profile.items && profile.items.following.length}
                          numPostings={profile.items && profile.items.postings.length}
                          isFollowing={profile.items && profile.items.isFollowing}/>
            <div className="col-md-8 col-sm-12">
              {posts.loading && <em>Loading Posts...</em>}
              {posts.error && <span className="text-danger">ERROR: {posts.error}</span>}
              {posts.items &&
              <div>
                {posts.items.map((i, index1) =>
                  <Posting key={index1} posting={i}/>
                )}
              </div>
              }
            </div>
          </div>
          <NewPostBall/>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  // console.log("state is ", state);
  // console.log(state.myposts);
  const {posts, profile} = state;
  // console.log(myposts);

  return {posts, profile};
  // const { users, authentication } = state;
  // const { user } = authentication;
  // return {
  //     user,
  //     users
  // };
}

const connectedUserPage = connect(mapStateToProps)(UserPage);
export {connectedUserPage as UserPage};
