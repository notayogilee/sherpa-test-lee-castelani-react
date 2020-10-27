import {
  GET_EVENTS,
  GET_EVENT,
  GET_EVENT_MEETINGS,
  GET_MENU,
  DISPLAY
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      }
    case GET_MENU:
      return {
        ...state,
        menu: action.payload
      }
    case GET_EVENT:
      return {
        ...state,
        event: action.payload
      }
    case GET_EVENT_MEETINGS:
      return {
        ...state,
        meetings: action.payload
      }
    case DISPLAY:
      return {
        ...state,
        display: action.payload
      }
    default: return state;
  }
}