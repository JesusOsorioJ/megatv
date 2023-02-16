const initialState = {
    user: {},
    view: 1,
    middle: false,
  };

  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_VIEW':
        return {
          ...state,
          view: action.payload,
        };
      case 'SET_USER':
        return {
          ...state,
          user: action.payload,
        };
      case 'IS_LOADING':
        return {
          ...state,
          middle: action.payload ,
        };
      default:
        return state;
    }
  }
  
  export default reducer;
  