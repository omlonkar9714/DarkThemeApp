// Initial State
const initialState = {
  username: '',
  token: '',
};

// Reducers (Modifies The State And Returns A New State)
const userReducer = (state = initialState, action) => {
  console.log('ACTION' + JSON.stringify(action));
  switch (action.type) {
    // Increase Counter
    case 'SAVE_DATA': {
      return {
        // State
        ...state,
        // Redux Store
        username: action.username,
        token: action.token,
      };
    }

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default userReducer;
