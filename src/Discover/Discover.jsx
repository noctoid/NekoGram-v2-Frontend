import React from 'react';
import {connect} from 'react-redux';
import {TopBar} from "../MediaFrames/TopBar";
import {dataActions} from "../_actions";
import {Posting} from "../MediaFrames/Posting";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      user: true,
      posting: false,
      tag: false,
      nyan: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    const {query, user, posting, tag, nyan} = this.state;
    const {dispatch} = this.props;
    e.preventDefault();
    console.log(query, user, posting, tag, nyan);
    dispatch(dataActions.search(query));
  }

  render() {
    const {query, user, posting, tag, nyan} = this.state;
    const {searchResult} = this.props;
    return (
      <div>
        <TopBar/>
        <div className="container page-content">
          <form onSubmit={this.handleSubmit}>

            <div className="row">
              <div className="form-group">
                <label>Search</label>
                <input type="text" className="form-control" onChange={this.handleChange} name="query" value={query}/>
                <input type="submit" className="form-control" name="submit"/>
              </div>
            </div>


            <div className="row">
              <div className="form-group">
                <div className="col-md-3">
                  <label>User</label>
                  <input type="radio" className="form-control" onChange={this.handleChange} name="user" value={user}/>
                </div>
                <div className="col-md-3">
                  <label>Posting</label>
                  <input type="radio" className="form-control" onChange={this.handleChange} name="posting" value={posting}/>
                </div>
                <div className="col-md-3">
                  <label>Tag</label>
                  <input type="radio" className="form-control" onChange={this.handleChange} name="tag" value={tag}/>
                </div>
                <div className="col-md-3">
                  <label>Nyan</label>
                  <input type="radio" className="form-control" onChange={this.handleChange} name="nyan" value={nyan}/>
                </div>
              </div>
            </div>


          </form>

          {searchResult.loading && <em>Loading Posts...</em>}
          {searchResult.error && <span className="text-danger">ERROR: {searchResult.error}</span>}
          {searchResult.items &&
          <div>
            {searchResult.items.result.map((i, index) =>
              <Posting key={index} posting={i} />
            )}
          </div>
          }

        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {searchResult} = state;
  return {searchResult};
}

const connectedDiscover = connect(mapStateToProps)(Discover);
export {connectedDiscover as Discover};
