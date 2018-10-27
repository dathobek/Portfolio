import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA9fwy8mOK8FjrdEATEPrxEuqQMueJBvTI",
    authDomain: "portfolio-4f8bb.firebaseapp.com",
    databaseURL: "https://portfolio-4f8bb.firebaseio.com",
    projectId: "portfolio-4f8bb",
    storageBucket: "portfolio-4f8bb.appspot.com",
    messagingSenderId: "315847465667"
};

const fire = firebase.initializeApp(config);
export default fire;