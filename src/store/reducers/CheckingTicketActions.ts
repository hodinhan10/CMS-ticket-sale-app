import { GET_CHECKING_MN, TicketManageAction, TicketState } from '../types';

const initialState: TicketState = {
  ticket: [],
  loaded: false
}

export default (state = initialState, action: TicketManageAction) => {
    switch(action.type) {
      case GET_CHECKING_MN:
        return {
          ...state,
          succes: true,
          ticket: action.payload,
          loaded: true
        }
      default:
        return state;
    }
  }