import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIJP17RgCWfakT0g89L87Oi7rh4BkIFc8',
  authDomain: 'idobatakaigi-with-ham-2debd.firebaseapp.com',
  projectId: 'idobatakaigi-with-ham-2debd',
  storageBucket: 'idobatakaigi-with-ham-2debd.appspot.com',
  messagingSenderId: '62135170037',
  appId: '1:62135170037:web:367ca50238aa39fb8966bc',
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
