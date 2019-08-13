import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "./../../actions";
import { withTheGuardianService } from "./../hoc";
import "./navigation.css";

class Navigation extends Component {
  state = {
    value: ""
  };

  onButtonClickHandler = idx => {
    const { fetchPosts, currentPage } = this.props;
    if (currentPage === 1 && idx === -1) {
      return fetchPosts(1);
    } else {
      return fetchPosts(currentPage + idx);
    }
  };

  onKeypressHandler = e => {
    const { fetchPosts, currentPage } = this.props;
    if (e.keyCode === 13) {
      if (currentPage === 1 && this.state.value < 1) {
        fetchPosts(1);
      } else {
        fetchPosts(this.state.value);
        this.setState({ value: "" });
      }
    }
  };

  onChangeHandler = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { currentPage, totalPages } = this.props;
    return (
      <div className="navigation">
        <div>
          <button
            type="button"
            className="btn btn-dark m-3 "
            onClick={() => {
              this.onButtonClickHandler(-1);
            }}
            disabled={currentPage === 1 ? "disabled" : null}
          >
            Prev. page
          </button>
        </div>
        <div className="pagination">
          <div>
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>
          <div>
            <input
              type="number"
              className="form-control mt-3 input-field"
              onKeyDown={e => {
                this.onKeypressHandler(e);
              }}
              onChange={e => {
                this.onChangeHandler(e);
              }}
              value={this.state.value}
            />
            Input page number and press "Enter"
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-dark m-3"
            onClick={() => {
              this.onButtonClickHandler(1);
            }}
          >
            Next page
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentPage, totalPages }) => {
  return { currentPage, totalPages };
};

const mapDispatchToProps = (dispatch, { theGuardianService }) => {
  return bindActionCreators(
    {
      fetchPosts: fetchPosts(theGuardianService)
    },
    dispatch
  );
};

export default withTheGuardianService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Navigation)
);
