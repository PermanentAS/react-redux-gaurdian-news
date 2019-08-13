const initialState = {
  currentPage: "",
  totalPages: "",
  posts: null,
  hasError: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING_POSTS":
      console.log(action.payload);
      return {
        ...state,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        posts: action.payload.posts
      };
    case "ERROR_CATCHED":
      return {
        ...state,
        hasError: action.payload
      };
    case "FETCHING_STARTED":
      return {
        ...state,
        posts: action.payload.posts,
        hasError: action.payload.hasError
      };
    case "FETCHING_FINISHED":
    default:
      return state;
  }
};

export default reducer;
