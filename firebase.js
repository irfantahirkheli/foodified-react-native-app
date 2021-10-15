import firebase from 'firebase';

import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCEA200lForZUI6KDtWoE4jVvcIkmtT7LA',
	authDomain: 'food-republic-project.firebaseapp.com',
	projectId: 'food-republic-project',
	storageBucket: 'food-republic-project.appspot.com',
	messagingSenderId: '691845033558',
	appId: '1:691845033558:web:cd23bd7e9de7f1595015f7',
};

// Initialize Firebase
//const firebaseApp = initializeApp(firebaseConfig);
//console.log(firebase.apps.length)
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
