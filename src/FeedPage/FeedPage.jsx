import React from 'react';
import {connect} from 'react-redux';
import {userActions} from '../_actions';
import {Posting} from "../MediaFrames/Posting";
import {TopBar} from "../MediaFrames/TopBar";
import {BriefProfile} from "../MediaFrames/BriefProfile";
import {NewPostBall} from "../MediaFrames/NewPostBall";

class FeedPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getProfile());
    this.props.dispatch(userActions.getMyFollow());
    this.props.dispatch(userActions.getFeed());
  };

  render() {
    const {posts, profile} = this.props;

    return (
      <div>
        <div>
          <div>
            <TopBar/>
            <div className="page-content">
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

      </div>
    );
  }
}


function mapStateToProps(state) {
  const {posts, profile} = state;
  return {posts, profile};

}

const connectedFeedPage = connect(mapStateToProps)(FeedPage);
export {connectedFeedPage as FeedPage};
