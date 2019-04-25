import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dataActions} from '../_actions/data.actions';
import {authHeader} from "../_helpers";
import {createSelector} from "reselect"

class Posting extends Component {
  componentDidMount() {
    const {pid} = this.props;
    this.props.dispatch(dataActions.getPosting(pid));
  };

  render() {
    const {pid, posting} = this.props;
    // console.log(pid);
    // console.log(this.state);
    // console.log("props", this.props);

    return (
      <div>
        {pid}
        {posting.loading && <em>Loading Posts...</em>}
        {posting.error && <span className="text-danger">ERROR: {posting.error}</span>}
        {/*{posting.content}*/}
        {posting.items &&
        <div>
          {
            posting.items.map((elem, index) =>
              <div key={elem.pid}>
                <img src={elem.content.mediaUrl} alt="image"/>
                <p>
                  index: {index} <br/>
                  pid: {elem.pid} <br/>
                  type: {elem.type} <br/>
                  mimeType: {elem.content.mimeType} <br/>
                  txt: {elem.content.txt} <br/>
                </p>
              </div>
            )
          }
        </div>
        }
      </div>
    );
  }
}



function mapStateToProps(state, ownProps) {
  // const reduceToSelf = createSelector(state => state.myposts.items.pid == ownProps.pid);
  // const {posting} = state.myposts.filter((post) => post.pid == ownProps.pid);
  const {posting} = state;
  const {pid} = ownProps;
  console.log("posting state ->", state);
  // console.log("ownProps", ownProps);
  // return createSelector(posting);
  return {posting};
  // return {"items":[{"pid":"00000000-1111-2222-3333-000000001234"}]};
}

const ConnectedPosting = connect(mapStateToProps)(Posting);
export {ConnectedPosting as Posting};
