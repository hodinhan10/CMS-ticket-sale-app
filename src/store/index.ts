import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import  {ticketReducer, ticketGroupDetailsReducer, ticketFamilyReducer } from './reducers/TicketManageReducer';
import {ticketCheckReducer, ticketCheckSelectReducer} from './reducers/CheckingTicketReducer';
import { serviceReducer } from './reducers/ServiceReducer';

const rootReducer = combineReducers({
    ticketCheck: ticketCheckReducer,
    ticketCheckSelect:ticketCheckSelectReducer,
    
    ticket: ticketReducer,
    ticketGroupDetails: ticketGroupDetailsReducer,
    ticketFamily: ticketFamilyReducer,

    service:serviceReducer,
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>

export default store;