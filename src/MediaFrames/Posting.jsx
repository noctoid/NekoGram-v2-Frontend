import React, {Component} from 'react';

class Posting extends Component {

  render() {
    // get actual data from props
    const {posting} = this.props;
    // console.log("Posting >>>", this.props);
    // generate the media block containing the media
    let postingMedia;
    if (posting.content.hasMedia) {
      if (posting.content.mimeType == "image/png" || posting.content.mimeType == "image/jpeg" || posting.content.mimeType == "image/webp") {
        postingMedia = <img className="img-responsive" src={posting.content.mediaUrl} alt="media"/>;
      } else {
        postingMedia = <p>TODO</p>;
      }
    }

    // count for likes, comments, and reposts
    let likesCount = posting.likes.length;
    let commentCount = posting.comments.length;
    let repostCount = posting.repost.length;

    return (
      <div className="panel panel-default posting">
        <div className="row">
          <div className="col-md-1">
            {/*<p>pid: {posting.pid}</p>*/}
            <img src={posting.avatarUrl} className=" avatar-sm"/>
          </div>
          <div className="col-md-11">
              <div className="col-md-12">
                <h4>{posting.displayName} @{posting.username}</h4>
                <hr />
                <p>{posting.content.txt}</p>
                {postingMedia}
                <p>Comments: {commentCount} Repost: {repostCount} Likes: {likesCount}</p>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export {Posting};
