import React from 'react';
import { connect } from 'react-redux';
import {dataActions} from "../_actions";


class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: '',
      media: null,
      hasMedia: false,
      submitted: false
    };
    console.log(this.state);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({submitted: true});
    const { txt, media } = this.state;
    const { dispatch } = this.props;

    if (txt) {
      dispatch(dataActions.newPost(txt));
    }
  }

  render() {
    const {postStatus} = this.props;
    const {txt, media, submitted} = this.state;
    console.log(this.state);
    console.log(this.props);
    return (
      <div className="col-md-6">

        <form name="form" onSubmit={this.handleSubmit} hidden={submitted}>
          <div className={'form-group' + (submitted && !txt ? ' has-error' : '')}>
            <label htmlFor="txt">New Post</label>
            <input type="text" className="form-control" name="txt" value={txt} onChange={this.handleChange} />
            {submitted && !txt &&
              <div className="help-block">Text is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Post</button>
            {postStatus &&
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            }
          </div>
        </form>
        <div hidden={!submitted}>
        <img src="https://img.icons8.com/cotton/64/000000/checkmark.png"
             className="img-responsive" />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { postStatus } = state;
  return { postStatus };
}

const connectedNewPost = connect(mapStateToProps)(NewPost);
export {connectedNewPost as NewPost};
