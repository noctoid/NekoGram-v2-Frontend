import React, {Component} from 'react';
import {LikeButton} from "./LikeButton";

class SearchResult extends Component {
  render() {
    // get actual data from props
    const {result} = this.props;
    
    if (result.quote != null) {
      // user
      return (
        <div className="panel panel-default posting" onClick={() => location.href = "../user?username="+result.username}>
          <div className="row">
            <div className="col-md-1">
              {/*<p>pid: {posting.pid}</p>*/}
              <img src={result.avatarUrl} className="avatar-sm"/>
            </div>
            <div className="col-md-11">
              <div className="col-md-12">
                <h4>{result.displayName} @{result.username}</h4>
                <hr/>
                <p>{result.quote}</p>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      // generate the media block containing the media
      let postingMedia;
      if (result.content.hasMedia || result.root_content.content.hasMedia) {
        if (result.content.hasMedia) {
          if (result.content.mimeType === "image/png" || result.content.mimeType === "image/jpeg" || result.content.mimeType === "image/webp") {
            postingMedia = <img className="img-responsive" src={result.content.mediaUrl} alt="media"/>;
          } else {
            postingMedia = <p>TODO</p>;
          }
        } else {
          if (result.root_content.content.mimeType === "image/png" ||
            result.root_content.content.mimeType === "image/jpeg" ||
            result.root_content.content.mimeType === "image/webp") {
            postingMedia = <img className="img-responsive" src={result.root_content.content.mediaUrl} alt="media"/>;
          } else {
            postingMedia = <p>TODO</p>;
          }
        }
      }

      // count for likes, comments, and reposts
      let likesCount = result.likes.length;
      let commentCount = result.comments.length;
      let repostCount = result.repost.length;

      switch (result.type) {
        case "posting":
          return (
            <div className="panel panel-default posting">
              <div className="row">
                <div className="col-md-1">
                  {/*<p>pid: {posting.pid}</p>*/}
                  <img src={result.avatarUrl} className="avatar-sm"/>
                </div>
                <div className="col-md-11">
                  <div className="col-md-12">
                    <h4>{result.displayName} @{result.username} says</h4>
                    <hr/>
                    <p>{result.content.txt}</p>
                    {postingMedia}

                    <LikeButton pid={result.pid}/>
                    <p>Comments: {commentCount} Repost: {repostCount} Likes: {likesCount}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        case "like":
          return (
            <div className="panel panel-default posting">
              <div className="row">
                <p>{result.displayName} Likes</p>
              </div>
              <div className="row">
                <div className="col-md-1">
                  {/*<p>pid: {posting.pid}</p>*/}
                  <img src={result.root_content.avatarUrl} className="avatar-sm"/>
                </div>
                <div className="col-md-11">
                  <div className="col-md-12">
                    <h4>{result.root_content.displayName} @{result.root_content.username} says</h4>
                    <hr/>
                    <p>{result.root_content.content.txt}</p>
                    {postingMedia}

                    <LikeButton pid={result.root_content.pid}/>
                    <p>Comments: {commentCount} Repost: {repostCount} Likes: {likesCount}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        case "repost":
          return (
            <div className="panel panel-default posting">
              {result.type} {result.root}
            </div>
          )
      }
    }




  }
}

export {SearchResult};
