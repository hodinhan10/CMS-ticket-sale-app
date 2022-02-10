import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import db from '../../firebase/config';
import { GET_CHECKING_GROUP, TicketAction } from '../types';

const a = (date: any) => {
  // let datearray = date.split("-");
  // let dayto = datearray[0] + '/' + datearray[1] + '/' + datearray[2];
  
  let dateArgs = date.match(/\d{2,4}/g),
  year = dateArgs[2],
  month = parseInt(dateArgs[1]) - 1,
  day = dateArgs[0];
  // hour = dateArgs[3],
  // minutes = dateArgs[4];
  
  // console.log('date', year, month, day);
  return new Date(year, month, day).getTime();
}

const daytoM_D_Y = (day:string) => {
  let datearray = day.split("-");
  return datearray[0] + '/' + datearray[1] + '/' + datearray[2];
}
export const getTicketMn = ({ checkIn = [0], status = 0, dayUsed = '' }: any): ThunkAction<void, RootState, null, TicketAction> => {
  return async dispatch => {
    console.log('dayUsed', daytoM_D_Y(dayUsed))
    console.log('dayUsed', a(daytoM_D_Y(dayUsed)))
    const statusNumber = Number(status)
    const arrCheckIn = checkIn.toString().split(',').map(Number);
    // console.log(arrCheckIn, typeof arrCheckIn)
    try {
      db.collection("TicketManage")
        // .where("UsageStatus", '>=', 0)
        // .where("CheckIn",  '!=', arrCheckIn)
        .where("UsageStatus", statusNumber === 0 ? '>=' : '==', statusNumber)
        .where("CheckIn", 'in', arrCheckIn[0] === 0 ? [1, 2, 3, 4, 5] : arrCheckIn)
        .get().then((querySnapshot) => {
          const arr: any = [];
          querySnapshot.forEach((doc) => {
            arr.push({ ...doc.data(), ...{ id: doc.id } })
          });
          // console.log('arr', arr)
          dispatch({ type: GET_CHECKING_GROUP, payload: arr });
        });
    } catch (err) {
      console.log(err);
    }
  }
}
