import React from 'react';
import {connect} from 'react-redux';
import {dataActions} from "../_actions";


class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
      media: [],
      hasMedia: false,
      submitted: false,
      mediaBase64: '',
      mediaFile: null,
      uploadFile: React.createRef()
    };
    // console.log(this.state);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
  }

  _handleImageChange(e) {
    const {dispatch} = this.props;
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      // console.log("littleTest", reader.result);
      dispatch(dataActions.newMedia(reader.result));
      this.setState({
        mediaFile: file,
        mediaBase64: reader.result
      });
    };

    reader.readAsDataURL(file)
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({submitted: true});
    const {txt, mediaUrl} = this.state;
    const {dispatch} = this.props;
    console.log("handleSubmit-->", mediaUrl);
    if (txt) {
      // console.log(mediaBase64);
      dispatch(dataActions.newPost(txt, "http://169.254.146.101:9000/" + localStorage.getItem("mediaUrl")));
      // dispatch(dataActions.newPost(txt, "http://169.254.146.101:9000/"+mediaUrl));
    }
  }

  render() {
    const {postStatus} = this.props;
    const {txt, media, submitted, mediaBase64, uploadFile} = this.state;
    // console.log(this.state);
    // console.log(this.props);

    let $imagePreview = null;
    if (mediaBase64) {
      $imagePreview = (<img src={mediaBase64} className="img-responsive"/>);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
      <div className="col-md-6">

        <form name="form" onSubmit={this.handleSubmit} hidden={submitted}>
          <div className={'form-group' + (submitted && !txt ? ' has-error' : '')}>
            <label htmlFor="txt">New Post</label>
            <input type="text" className="form-control" name="txt" value={txt} onChange={this.handleChange}/>
            {submitted && !txt &&
            <div className="help-block">Text is required</div>
            }
            {$imagePreview}
            <label htmlFor="txt">Media</label>
            <input type="file" className="form-control" ref={uploadFile} name="media" value={media}
                   onChange={this._handleImageChange}/>
            {/*{submitted && !txt &&*/}
            {/*<div className="help-block">Text is required</div>*/}
            {/*}*/}
          </div>

          <div className="form-group">
            <button className="btn btn-primary">Post</button>
            {/*{postStatus &&*/}
            {/*<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />*/}
            {/*}*/}
          </div>
        </form>
        <div hidden={!submitted}>
          <h3>Done!</h3>
          <img src="https://img.icons8.com/bubbles/100/000000/checkmark.png"
               className="img-responsive"/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {postStatus} = state;
  return {postStatus};
}

const connectedNewPost = connect(mapStateToProps)(NewPost);
export {connectedNewPost as NewPost};
