import { GET_SERVICE, ServiceTicketAction, ServiceState, CREATE_SERVICE } from '../types';

const initialState: ServiceState = {
  ticket: []
}

export const serviceReducer = (state = initialState, action: ServiceTicketAction) => {
  switch (action.type) {
    case GET_SERVICE:
      return {
        ...state,
        ticket: action.payload,
      }
    case CREATE_SERVICE:
      return {
        ticket_id: action.payload,
      }
    default:
      return state;
  }
}


