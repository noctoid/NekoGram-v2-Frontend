import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../_actions';
import {dataActions} from "../_actions";

import {LoginPage} from "../LoginPage";
import {Posting} from "../MediaFrames/Posting";
import {ProfilePage} from "../ProfilePage";
import {Discover} from "../Discover";
import {NewPost} from "../NewPost";

import {apiConstants} from "../_constants";
import {TopBar} from "../MediaFrames/TopBar";
import {BriefProfile} from "../MediaFrames/BriefProfile";
import {NewPostBall} from "../MediaFrames/NewPostBall";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getMyPosts());
    this.props.dispatch(userActions.getProfile());
  };

  render() {
    const {myposts, profile} = this.props;

    return (
      <div>
        {/*<TopBar/>*/}
        <Router>
          <div>
            {/*<TopBar/>*/}
            {/*<div className="row">*/}

              {/*My Posts*/}
              <Route path="/login" component={LoginPage}/>
              <Route path="/" exact render={() =>
                <div>
                  <TopBar/>
                  <div className="row page-content">
                    <BriefProfile avatarUrl={profile.items && profile.items.avatarUrl}
                                  displayName={profile.items && profile.items.displayName}
                                  username={profile.items && profile.items.username}/>
                    <div className="col-md-8 col-sm-12">
                      {myposts.loading && <em>Loading Posts...</em>}
                      {myposts.error && <span className="text-danger">ERROR: {myposts.error}</span>}
                      {myposts.items &&
                      <div>
                        {myposts.items.map((i, index1) =>
                          <Posting key={index1} posting={i}/>
                        )}
                      </div>
                      }
                    </div>
                  </div>
                  <NewPostBall/>
                </div>
              }/>
              <Route path="/profile" exact component={ProfilePage}/>
              <Route path="/discover" component={Discover}/>
              <Route path="/new_post" component={NewPost}/>
            {/*</div>*/}

          </div>
        </Router>
      </div>
    );
  }
}


function mapStateToProps(state) {
  // console.log("state is ", state);
  // console.log(state.myposts);
  const {myposts, profile} = state;
  // console.log(myposts);

  return {myposts, profile};
  // const { users, authentication } = state;
  // const { user } = authentication;
  // return {
  //     user,
  //     users
  // };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export {connectedHomePage as HomePage};
