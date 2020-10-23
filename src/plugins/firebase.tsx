import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCmghFagSypf92xrXNRnxR0sRIjqGg6NHM\n",
  authDomain: "react-todo-58490.firebaseapp.com",
  databaseURL: "https://react-todo-58490.firebaseio.com",
  projectId: "react-todo-58490",
  storageBucket: "react-todo-58490.appspot.com",
  messagingSenderId: "1044642604511",
}

const firebaseApp = firebase.initializeApp(config)
export const firestore = firebaseApp.firestore()
