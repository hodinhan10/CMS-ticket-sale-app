import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { MDYtoDate } from '../../config/function';
import db from '../../firebase/config';
import {
  GET_CHECKING_FAMILY,
  GET_CHECKING_GROUP,
  GET_CHECKING_GROUP_DETAILS,
  TicketAction
} from '../types';

export const getTicketMn = ({
  checkIn = [0],
  status = 0,
  dayUsed = 0,
  dayEnd = 0,
  valueSreachEvent = ''
}: any): ThunkAction<void, RootState, null, TicketAction> => {
  return async dispatch => {
    const statusNumber = Number(status)
    const arrCheckIn = checkIn.toString().split(',').map(Number);
    const DateStart = new Date(dayUsed)
    const DateEnd = new Date(dayEnd)

    try {
      let arr1: any = [];
      let arr2: any = [];
      let arr3: any = [];

      await db.collection("TicketManage")
        .where("DateUsed", '>=', DateStart)
        .where("DateUsed", DateEnd.getFullYear() <= 2000 ? '>=' : '<=', DateEnd)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr1.push({ ...doc.data(), ...{ id: doc.id } })
          });
        });

      await db.collection("TicketManage")
        .where("UsageStatus", statusNumber === 0 ? '>=' : '==', statusNumber)
        .where("CheckIn", 'in', arrCheckIn[0] === 0 ? [1, 2, 3, 4, 5] : arrCheckIn)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr2.push({ ...doc.data(), ...{ id: doc.id } })
          });
        });

      await db.collection("TicketManage")
        .orderBy("TicketNember")
        .startAt(valueSreachEvent)
        .endAt(valueSreachEvent + "\uf8ff")
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr3.push({ ...doc.data(), ...{ id: doc.id } })
          });
        });

      const arr = await arr1.filter((o: any) => arr2.some(({ id }: any) => o.id === id));
      const arrAll = await arr.filter((o: any) => arr3.some(({ id }: any) => o.id === id));

      dispatch({ type: GET_CHECKING_GROUP, payload: arrAll });

    } catch (err) {
      console.log(err);
    }
  }
}

export const detailsTicketEvent = (
  id: any
  ): ThunkAction<void, RootState, null, TicketAction> => {
  // console.log(id);
  return async dispatch => {
    try {
      await  db.collection("TicketManage").doc(id)
        .get().then((doc) => {
          let arr1: any = [];
          arr1.push({ ...doc.data(), ...{ id: doc.id } })
          // console.log("Cached document data:", arr1);
          dispatch({ type: GET_CHECKING_GROUP_DETAILS, payload: arr1 });

        }).catch((error) => {
          console.log("Error getting cached document:", error);
        });
    } catch (error) {
      console.log(error);

    }
  }
}
// UpdateDayEndTicketEvent
export const UpdateDayEndTicketEvent = (
  DateEnd: any, 
  id: any
  ): ThunkAction<void, RootState, null, TicketAction> => {
  console.log('DateEnd', DateEnd)
  return async dispatch => {
    try {
      const DateEndNow = MDYtoDate(DateEnd)
      console.log('DateEndNow', DateEndNow)
      // db.collection("TicketManage").doc(id).update({DateEnd: DateEndNow})
      // dispatch({ type: GET_CHECKING_GROUP_UPDATE, payload: arr1 });
    } catch (error) {
      console.log(error);

    }
  }
}


// --------------------------  Family   ---------------------------------  //

export const getTicketFamily = ({
  checkIn = [0],
  status = 0,
  dayUsed = 0,
  dayEnd = 0,
  valueSreachFamily = ''
}: any): ThunkAction<void, RootState, null, TicketAction> => {
  return async dispatch => {
    const statusNumber = Number(status)
    const arrCheckIn = checkIn.toString().split(',').map(Number);
    const DateStart = new Date(dayUsed)
    const DateEnd = new Date(dayEnd)

    try {
      let arr1: any = [];
      let arr2: any = [];
      let arr3: any = [];

      await db.collection("TicketFamily")
        .where("DateUsed", '>=', DateStart)
        .where("DateUsed", DateEnd.getFullYear() <= 2000 ? '>=' : '<=', DateEnd)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr1.push({ ...doc.data(), ...{ id: doc.id } })
          });
        });

      await db.collection("TicketFamily")
        .where("UsageStatus", statusNumber === 0 ? '>=' : '==', statusNumber)
        .where("CheckIn", 'in', arrCheckIn[0] === 0 ? [1, 2, 3, 4, 5] : arrCheckIn)
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr2.push({ ...doc.data(), ...{ id: doc.id } })
          });
        });

      await db.collection("TicketFamily")
        .orderBy("TicketNember")
        .startAt(valueSreachFamily)
        .endAt(valueSreachFamily + "\uf8ff")
        .get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            arr3.push({ ...doc.data(), ...{ id: doc.id } })
          });
        });
      
      const arr = await arr1.filter((o: any) => arr2.some(({ id }: any) => o.id === id));
      const arrAll = await arr.filter((o: any) => arr3.some(({ id }: any) => o.id === id));

      dispatch({ type: GET_CHECKING_FAMILY, payload: arrAll });

    } catch (err) {
      console.log(err);
    }
  }
}