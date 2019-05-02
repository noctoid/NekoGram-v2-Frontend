import React from 'react';
import {connect} from 'react-redux';

import {dataActions, userActions} from '../_actions';

import {BlockPicker} from "react-color";

import {apiConstants} from "../_constants";

import {TopBar} from "../MediaFrames/TopBar";
import {BriefProfile} from "../MediaFrames/BriefProfile";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: "",
      quote: "",
      themeColor: "",
      media: [],
      avatarUrl: "",
      avatarPreview: "",
      avatarFile: React.createRef(),
      submitted: false,
      modified: false,
      toEdit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleThemeColorChange = this.handleThemeColorChange.bind(this);
    this.toEdit = this.toEdit.bind(this);
  }

  handleImageChange(e) {
    const {dispatch} = this.props;
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      // console.log("littleTest", reader.result);
      dispatch(dataActions.newMedia(reader.result));
      this.setState({
        avatarPreview: file,
        avatarUrl: reader.result,
        modified: true
      });
    };

    reader.readAsDataURL(file)
  }

  handleThemeColorChange = (color) => {
    this.setState({themeColor: color.hex});
    console.log(this.state);
  };

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value, modified: true});
    console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({submitted: true});
    const {displayName, quote, themeColor, modified} = this.state;
    const {dispatch} = this.props;

    if (modified) {
      dispatch(userActions.editProfile(displayName, quote, themeColor, apiConstants.MediaServer + localStorage.getItem("mediaUrl")));
      this.toEdit();
    }
  }

  toEdit() {
    this.setState({toEdit: !this.state.toEdit});
  }


  componentDidMount() {
    this.props.dispatch(userActions.getProfile());
  };

  render() {
    const {profile} = this.props;
    let {displayName, quote, themeColor, media, avatarFile, avatarUrl, modified, submitted, toEdit} = this.state;
    console.log("ProfilePage", this.props, this.state);

    // image preview for avatar
    let $imagePreview = null;
    if (avatarUrl) {
      $imagePreview = (<img src={avatarUrl} className="img-responsive avatar-lg"/>);
    } else {
      $imagePreview = (<div className="previewText"></div>);
    }

    return (
      <div>
        <TopBar/>
        <BriefProfile avatarUrl={profile.items && profile.items.avatarUrl}
                      displayName={profile.items && profile.items.displayName}
                      username={profile.items && profile.items.username}/>
        <div className="col-md-8 col-sm-12">

          <h2>ProfilePage</h2>
          <div hidden={toEdit}>
            <p>{profile.items && profile.items.displayName}</p>
            <p>{profile.items && profile.items.username}</p>
            <p>{profile.items && profile.items.uid}</p>
            <p>{profile.items && profile.items.quote}</p>
            <img src={profile.items && profile.items.avatarUrl} className="img-responsive"/>
            <button className="btn btn-primary" onClick={this.toEdit}>Edit</button>
          </div>

          <div hidden={!toEdit}>
            <form name="form" onSubmit={this.handleSubmit}>
              {/*<div className={'form-group' + (submitted && !txt ? ' has-error' : '')}>*/}
              <div className="form-group">

                <label htmlFor="txt">Display Name</label>
                <input type="text" className="form-control" name="displayName"
                       value={displayName} onChange={this.handleChange}
                       placeholder={profile.items && profile.items.displayName}/>

                <label htmlFor="txt">Username</label>
                <input type="text" className="form-control" disabled={true}
                       placeholder={profile.items && "@" + profile.items.username} readOnly={true}/>

                <label htmlFor="txt">User ID</label>
                <input type="text" className="form-control" disabled={true}
                       placeholder={profile.items && profile.items.uid} readOnly={true}/>

                <label htmlFor="txt">Quote</label>
                <input type="text" className="form-control" name="quote"
                       value={quote} placeholder={profile.items && profile.items.quote}
                       onChange={this.handleChange}/>

                <label htmlFor="txt">Color Theme</label>
                <BlockPicker color={themeColor} onChange={this.handleThemeColorChange}/>
                {$imagePreview}
                <label htmlFor="txt">Avatar</label>
                <input type="file" className="form-control" ref={avatarFile}
                       onChange={this.handleImageChange} name="media" value={media}/>
                {/*{submitted && !txt &&*/}
                {/*<div className="help-block">Text is required</div>*/}
                {/*}*/}
              </div>

              <div className="form-group">
                <button className="btn btn-primary">Save</button>
                {/*{postStatus &&*/}
                {/*<img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />*/}
                {/*}*/}
              </div>
              <button className="btn btn-outline-primary" onClick={this.toEdit}>Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  const {profile, newProfile} = state;
  return {profile, newProfile};
}

const connectedProfilePage = connect(mapStateToProps)(ProfilePage);
export {connectedProfilePage as ProfilePage};
