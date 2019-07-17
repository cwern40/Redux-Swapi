import { SUCCESS, FETCHING, FAILURE } from "../actions";
const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case SUCCESS: {
      return {
        state
      }
    } 
    case FAILURE: {
      return action.payload
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
