import React, { Component } from 'react';
import { connect } from 'react-redux';
import { dataActions } from '../_actions/data.actions';

class Posting extends Component {
    componentDidMount() {
      const { pid } = this.props;
      // console.log(pid);
      this.props.dispatch(dataActions.getPosting(pid));
    };
    render() {
        const { pid, posting } = this.props;
        // console.log(this.props);
        return (
            <div>
                Posting Placeholder {pid}
                {posting.loading && <em>Loading Posts...</em>}
                {posting.error && <span className="text-danger">ERROR: {posting.error}</span>}
                {posting.items &&
                    <div>
                        {
                            posting.items.map((i, index) =>
                                <div key={index}>
                                    <p>
                                        {i.uid} {i.type}
                                        {i.content.txt}
                                    </p>
                                    <img src={i.content.mediaUrl} alt="image"/>
                                </div>
                            )
                        }
                    </div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    // console.log(state);
    const { posting } = state;
    return { posting };
}
const ConnectedPosting = connect(mapStateToProps)(Posting);
export { ConnectedPosting as Posting };
