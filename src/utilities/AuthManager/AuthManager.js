import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig.js";

export const firebaseInitializeApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

// login with google
export const signInWithPopup = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const setLoggedInUserData = {
        isSingedUser: true,
        email: email,
        displayName: displayName,
        photoUrl: photoURL,
        error: "",
        succes: "Logged Successfully!",
      };
      return setLoggedInUserData;
    })
    .catch((error) => {
      const errorMessage = error.message;
      const setLoggedInUserData = {
        isSingedUser: false,
        email: "",
        displayName: "",
        photoUrl: "",
        error: errorMessage,
        succes: "",
      };
      return setLoggedInUserData;
    });
};

// Create user with email password
export const createUserWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const setLoggedInUserData = {
        isSingedUser: true,
        email: email,
        displayName: displayName,
        photoUrl: photoURL,
        error: "",
        succes: "Logged Successfully!",
      };
      return setLoggedInUserData;
    })
    .catch((error) => {
      const errorMessage = error.message;
      const setLoggedInUserData = {
        isSingedUser: false,
        email: "",
        displayName: "",
        photoUrl: "",
        error: errorMessage,
        succes: "",
      };
      return setLoggedInUserData;
    });
};

// Sign in with email password
export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const setLoggedInUserData = {
        isSingedUser: true,
        email: email,
        displayName: displayName,
        photoUrl: photoURL,
        error: "",
        succes: "Logged Successfully!",
      };
      return setLoggedInUserData;
    })
    .catch((error) => {
      const errorMessage = error.message;
      const setLoggedInUserData = {
        isSingedUser: false,
        email: "",
        displayName: "",
        photoUrl: "",
        error: errorMessage,
        succes: "",
      };
      return setLoggedInUserData;
    });
};

// Sign Out
export const signOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      const setLoggedInUserData = {
        isSingedUser: false,
        email: "",
        displayName: "",
        photoUrl: "",
        error: "",
        succes: "",
      };
      return setLoggedInUserData;
    })
    .catch((error) => {
      const errorMessage = error.message;
      const setLoggedInUserData = {
        error: errorMessage,
      };
      return setLoggedInUserData;
    });
};
