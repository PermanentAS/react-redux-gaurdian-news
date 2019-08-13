import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "./actions";
import { withTheGuardianService } from "./components/hoc";

import Header from "./components/header";
import NewsList from "./components/news-list";
import Navigation from "./components/navigation";
import ErrorBoundry from "./components/error-boundry";

class App extends Component {
  componentDidMount() {
    this.props.fetchPosts(1);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ErrorBoundry>
          <NewsList />
        </ErrorBoundry>
        <Navigation />
      </div>
    );
  }
}

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
    null,
    mapDispatchToProps
  )(App)
);
