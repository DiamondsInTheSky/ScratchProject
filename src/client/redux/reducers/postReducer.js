//depends on what we are fetching

import { FETCH_POSTS, NEW_POST } from ../ actions / actions';

const initialState = {

}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload;
      }
    default:
      return state;
  }
}