const fetchingStarted = () => {
  return {
    type: "FETCHING_STARTED",
    payload: { posts: null, hasError: false }
  };
};

const fetchingPosts = resp => {
  return {
    type: "FETCHING_POSTS",
    payload: resp
  };
};

const fetchingFinished = () => {
  return {
    type: "FETCHING_FINISHED"
  };
};

const errorCatched = () => {
  return {
    type: "ERROR_CATCHED",
    payload: true
  };
};

const fetchPosts = theGuardianService => page => dispatch => {
  dispatch(fetchingStarted());
  setTimeout(() => {
    theGuardianService
      .getNews(page)
      .then(resp => {
        dispatch(fetchingPosts(resp));
        dispatch(fetchingFinished());
      })
      .catch(err => dispatch(errorCatched()));
  }, 500);
};

export { fetchPosts, errorCatched };
