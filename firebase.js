import firebase from 'firebase';
import {
	FIREBASE_API_KEY,
	FIRBASE_AUTH_DOMAIN,
	FIREBASE_PROJECT_ID,
	FIREBASE_StorageBucket,
	FIREBASE_MessagingSenderId,
	FIREBASE_APP_ID,
} from '@env';

import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: FIREBASE_API_KEY,
	authDomain: FIRBASE_AUTH_DOMAIN,
	projectId: FIREBASE_PROJECT_ID,
	storageBucket: FIREBASE_StorageBucket,
	messagingSenderId: FIREBASE_MessagingSenderId,
	appId: FIREBASE_APP_ID,
};

// Initialize Firebase
//const firebaseApp = initializeApp(firebaseConfig);
//console.log(firebase.apps.length)
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
