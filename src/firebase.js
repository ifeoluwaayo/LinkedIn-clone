import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyAZRypII4yW-OU3GHmQnBMu8wJtvaQpyZI",
	authDomain: "linkedin-clone-17a92.firebaseapp.com",
	projectId: "linkedin-clone-17a92",
	storageBucket: "linkedin-clone-17a92.appspot.com",
	messagingSenderId: "1025947626431",
	appId: "1:1025947626431:web:024659fbcb308f96264f0a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
