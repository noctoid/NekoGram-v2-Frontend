import React from 'react';
import { connect } from 'react-redux';

class Discover extends React.Component {
  render() {
    return (
      <div>
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
