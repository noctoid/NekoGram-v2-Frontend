import React from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../_helpers';
import {alertActions} from '../_actions';
import {PrivateRoute} from '../_components';
import {HomePage} from '../HomePage';
import {LoginPage} from '../LoginPage';
import {ProfilePage} from "../ProfilePage";
import {Discover} from "../Discover";
import {NewPost} from "../NewPost";
import {UserPage} from "../UserPage";

class App extends React.Component {
  constructor(props) {
    super(props);

    const {dispatch} = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const {alert} = this.props;
    return (

      <div className="container no-margin">

        {alert.message &&
        <div className={`alert ${alert.type}`}>{alert.message}</div>
        }
        <Router history={history}>
          <div>
            <PrivateRoute exact path="/" component={HomePage}/>
            <Route path="/login" component={LoginPage}/>
            <PrivateRoute path="/profile" component={ProfilePage}/>
            <PrivateRoute path="/discover" component={Discover} />
            <PrivateRoute path="/new_post" component={NewPost}/>
            <PrivateRoute path="/feed" component={HomePage} />
            <Route path="/user" component={UserPage}/>
            <Route path="/114514" exact render={() =>
              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg" alt="114514"/>
                <audio src="https://www.marxists.org/history/ussr/sounds/mp3/soviet-anthem.mp3" autoPlay/>
              </div>
              } />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {alert} = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};
