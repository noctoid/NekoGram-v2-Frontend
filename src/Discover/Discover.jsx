import React from 'react';
import {connect} from 'react-redux';
import {TopBar} from "../MediaFrames/TopBar";
import {dataActions} from "../_actions";
import {SearchResult} from "../MediaFrames/SearchResult";

class Discover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
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
          <form onSubmit={this.handleSubmit} className="jumbotron">

            <div className="row">
              <div className="form-group has-feedback">
                <div>
                  <input type="text" className="form-control" onChange={this.handleChange} name="query" value={query}/>
                  <i className="glyphicon glyphicon-search form-control-feedback"></i>
                </div>
                <input type="submit" className="form-control" name="submit"/>
              </div>
            </div>

          </form>

          {searchResult.loading && <em>Loading Posts...</em>}
          {searchResult.error && <span className="text-danger">ERROR: {searchResult.error}</span>}
          {searchResult.items &&
          <div>
            {searchResult.items.result.map((i, index) =>
              <SearchResult key={index} result={i} />
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
