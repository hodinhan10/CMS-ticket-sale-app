import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import db from '../../firebase/config';
import { TicketAction, GET_CHECKING_GROUP } from '../types';


export const getTicketMn = (): ThunkAction<void, RootState, null, TicketAction> => {
  return async dispatch => {
    try { 
      db.collection("TicketManage").get().then((querySnapshot) => {
        const arr:any = [];
        querySnapshot.forEach((doc) => {
          arr.push({...doc.data(), ...{id: doc.id}})
        });
        // console.log('arr',arr)
        dispatch({type: GET_CHECKING_GROUP, payload: arr });
      });
    } catch (err) {
      console.log(err);
    }
  }
}

// export const getImages = (): ThunkAction<void, RootState, null, GalleryAction> => {
//   return async dispatch => {
//     try {
//       const docs = await firebase.firestore().collection('gallery').get();
//       console.log(docs)
//       const arr: GalleryImage[] = [];
//       docs.forEach(doc => {
//         const { createdAt, fileName, filePath, imageUrl, uploaderName, uploaderId } = doc.data();
//         arr.push({ createdAt, fileName, filePath, imageUrl, uploaderName, uploaderId, id: doc.id });
//       });
//       console.log('arr',arr)
//       dispatch({
//         type: GET_IMAGES,
//         payload: arr
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

