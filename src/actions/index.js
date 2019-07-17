// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const CHARACTER_FETCHING = 'CHARACTER_FETCHING'
export const CHARACTER_SUCCESS = 'CHARACTER_SUCCESS'
export const CHARACTER_FAILURE = 'CHARACTER_FAILURE'

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export function getCharacters() {
    return (dispatch) => {
        dispatch({ type: CHARACTER_FETCHING })

        axios.get('https://swapi.co/api/people')
            .then((res) => {
                console.log(res)
                dispatch({ type: CHARACTER_SUCCESS, payload: res.data })
            })
            .catch((err) => {
                console.log(err)
                dispatch({ type: CHARACTER_FAILURE, payload: err.response.data})
            })
    }
}