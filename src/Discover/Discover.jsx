import React from 'react';
import { connect } from 'react-redux';
import { TopBar } from "../MediaFrames/TopBar";
import { BriefProfile } from "../MediaFrames/BriefProfile";

class Discover extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <p>
          Discover Component
        </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { discover } = state;
  return { discover };
}

const connectedDiscover = connect(mapStateToProps)(Discover);
export {connectedDiscover as Discover};
