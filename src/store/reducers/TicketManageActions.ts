import { GET_CHECKING_GROUP, GET_CHECKING_GROUP_DETAILS, TicketAction, TicketState, TicketStateGroupDetails } from '../types';

const initialState: TicketState = {
  ticket: [],
  loaded: false
}

export const ticketReducer = (state = initialState, action: TicketAction) => {
  switch (action.type) {
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

const initialState1: TicketStateGroupDetails = {
  ticketGroupDetails: [],
  loaded: false
}

export const ticketGroupDetailsReducer = (state = initialState1, action: TicketAction) => {
  switch (action.type) {
    case GET_CHECKING_GROUP_DETAILS:
      return {
        ...state,
        ticketGroupDetails: action.payload,
        loaded: true
      }
    default:
      return state;
  }
}