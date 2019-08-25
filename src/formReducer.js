import formActionTypes from './formActionTypes';

export default function reducer(state, { type, payload }) {
  switch(type) {
    case formActionTypes.SHOW_TEXT:
      return {
        ...state,
        showText: !payload
      };
    default:
      return state;
  }
}