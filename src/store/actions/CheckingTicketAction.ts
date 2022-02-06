import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import db from '../../firebase/config';
import { TicketManageAction, GET_CHECKING_MN } from '../types';


export const getCheckingTicket = (): ThunkAction<void, RootState, null, TicketManageAction> => {
  return async dispatch => {
    try { 
      db.collection("CheckingTicket").get().then((querySnapshot) => {
        const arr:any = [];
        querySnapshot.forEach((doc) => {
          arr.push({...doc.data(), ...{id: doc.id}})
        });
        console.log('arr',arr)
        dispatch({type: GET_CHECKING_MN, payload: arr });
      });
    } catch (err) {
      console.log(err);
    }
  }
}