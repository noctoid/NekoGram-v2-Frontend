import React, {Component} from 'react';


class LikeButton extends Component {
  render() {
    return (
      <p>
        <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
      </p>
    )
  }
}

export {LikeButton};
