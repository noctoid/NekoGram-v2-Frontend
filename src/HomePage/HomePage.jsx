import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../_actions';
import {dataActions} from "../_actions";

import {LoginPage} from "../LoginPage";
import {Posting} from "../MediaFrames/Posting";
import {ProfilePage} from "../ProfilePage";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getMyPosts());
    // this.props.dispatch(userActions.getProfile());
  };

  render() {
    const {myposts} = this.props;

    return (
      <Router>
        <div className="col-md-6 col-md-offset-1">
          <h2>NekoGram!</h2>
          {/*My Posts*/}
          <Route path="/login" component={LoginPage}/>
          <Route path="/" exact render={() =>
            <div>
              <h3>My Posts</h3>
              <div>
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
          }/>
          {/*Profile Page*/}
          <Route path="/profile" component={ProfilePage}/>
          <p>
            <Link to="/login">Logout</Link>
            <Link to="/"> | Home | </Link>
            <Link to="/profile">Profile</Link>
          </p>

        </div>
      </Router>
    );
  }
}


function mapStateToProps(state) {
  // console.log("state is ", state);
  // console.log(state.myposts);
  const {myposts} = state;
  // console.log(myposts);

  return {myposts};
  // const { users, authentication } = state;
  // const { user } = authentication;
  // return {
  //     user,
  //     users
  // };
}

const connectedHomePage = connect(mapStateToProps)(HomePage);
export {connectedHomePage as HomePage};
