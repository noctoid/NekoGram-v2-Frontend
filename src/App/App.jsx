import React from 'react';
import {Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import {history} from '../_helpers';
import {alertActions} from '../_actions';
import {PrivateRoute} from '../_components';
import {HomePage} from '../HomePage';
import {LoginPage} from '../LoginPage';
import {ProfilePage} from "../ProfilePage";

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
            <Route path="/profile" component={ProfilePage}/>
            <Route path="/114514" render={() =>
              <iframe src="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3"></iframe>}/>
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
