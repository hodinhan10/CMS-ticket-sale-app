import { GET_CHECKING_GROUP, TicketAction, TicketState } from '../types';

const initialState: TicketState = {
  ticket: [],
  loaded: false
}

export default (state = initialState, action: TicketAction) => {
    switch(action.type) {
      case GET_CHECKING_GROUP:
        return {
          ...state,
          ticket: action.payload,
          loaded: true
        }
      default:
        return state;
    }
  }