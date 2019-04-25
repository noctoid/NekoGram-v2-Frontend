import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {userActions} from '../_actions';

import {Posting} from "../MediaFrames/Posting";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(userActions.getMyPosts());
  };

  render() {
    const {myposts} = this.props;
    // console.log("front console", myposts);
    // console.log("JSON", JSON.stringify(myposts));
    console.log(myposts);
    return (
      <div className="col-md-6 col-md-offset-3">
        <h1>NekoGram!</h1>
        <h3>Posts</h3>
        <div>
          {myposts.loading && <em>Loading Posts...</em>}
          {myposts.error && <span className="text-danger">ERROR: {myposts.error}</span>}
          {myposts.items &&
          <div>
            {myposts.items.map((i, index1) =>
              <Posting key={index1} pid={i}/>
            )}
          </div>
          }
        </div>
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
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
