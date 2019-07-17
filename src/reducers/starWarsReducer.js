import { CHARACTER_FETCHING, CHARACTER_SUCCESS, CHARACTER_FAILURE } from "../actions/index";
const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_FETCHING: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case CHARACTER_SUCCESS: {
      return {
        ...state,
        characters: [...state.characters, ...action.payload.results]
      }
    } 
    case CHARACTER_FAILURE: {
      return action.payload
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
