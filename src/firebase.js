import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import firebase from 'firebase/app';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDcPiA0xOpCRG2hc-ebiacOTXkZfiMcAY4',
  authDomain: 'gdclone-402a4.firebaseapp.com',
  databaseURL: 'https://gdclone-402a4-default-rtdb.firebaseio.com',
  projectId: 'gdclone-402a4',
  storageBucket: 'gdclone-402a4.appspot.com',
  messagingSenderId: '817870587669',
  appId: '1:817870587669:web:6dfb2c5409132217790b1c',
  measurementId: 'G-EY9G1RTNNH',
});

export const auth = app.auth();

// Database management
const firestore = app.firestore();
export const database = {
  folders: firestore.collection('folders'),
  files: firestore.collection('files'),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export default app;
