import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import db from '../../firebase/config';
import { TicketManageAction, GET_CHECKING_MN } from '../types';


export const getCheckingTicket = ({ usageStatus }: any): ThunkAction<void, RootState, null, TicketManageAction> => {
  return async dispatch => {
    const statusNumber = Number(usageStatus)
    // console.log(statusNumber, typeof statusNumber)
    try {
      db.collection("CheckingTicket")
        .where('UsageStatus', statusNumber === 0 ? '>=' : '==', statusNumber)
        // .where('UsageStatus',  '==', 1)
        .get().then((querySnapshot) => {
          const arr: any = [];
          querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), ...{ id: doc.id } })
          });
          console.log(arr);
          dispatch({ type: GET_CHECKING_MN, payload: arr });
        });
    } catch (err) {
      console.log(err);
    }
  }
}