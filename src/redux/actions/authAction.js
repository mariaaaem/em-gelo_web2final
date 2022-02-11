import * as actionTypes from "../types";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAdditionalUserInfo,
} from "firebase/auth";
import { auth, db } from "../../assets/utils/firebase";
import { setDoc, doc, onSnapshot } from "firebase/firestore";

export const getUserInfo = () => async (dispatch) => {
  onAuthStateChanged(auth, (user = auth.currentUser) => {
    const userRef = doc(db, "users", user.uid);
    onSnapshot(userRef, (doc) => {
      const data = { ...doc.data(doc.id) };
      localStorage.setItem("userInfo", JSON.stringify(data));
      localStorage.setItem("isAuth", true);
      dispatch({ type: actionTypes.LOGGED_IN_STATE, payload: data });
    });
  });
};
export const createNewUserEmail =
  (email, password, name,  avatar) =>
  async (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        onAuthStateChanged(auth, (user) => {
          if (getAdditionalUserInfo(userCredential).isNewUser) {
            const userRef = doc(db, "users", user.uid);
            setDoc(userRef, {
              id: user.uid,
              name: name,
              email: email,
              avatar: avatar,
              //online: isOnline,
            }).then(() => {
              onSnapshot(userRef, (doc) => {
                const data = { ...doc.data(doc.id) };
                localStorage.setItem("userInfo", JSON.stringify(data));
                localStorage.setItem("isAuth", true);
                dispatch({ type: actionTypes.LOGGED_IN_STATE, payload: data });
              });
            });
          } else {
            const userRef = doc(db, "users", user.uid);
            onSnapshot(userRef, (doc) => {
              setDoc(userRef, {
                id: user.uid,
                firstName: doc.data().firstName,
                lastName: doc.data().lastName,
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                birthDate: doc.data().birthDate,
                gender: doc.data().gender,
                totalSets: doc.data().totalSets,
                totalPosts: doc.data().totalPosts,
                totalGroups: doc.data().totalGroups,
              });
              const data = { ...doc.data(doc.id) };
              localStorage.setItem("userInfo", JSON.stringify(data));
              localStorage.setItem("isAuth", true);
              dispatch({ type: actionTypes.LOGGED_IN_STATE, payload: data });
            });
          }
        });
      })
      .catch(() => {
        dispatch({
          type: actionTypes.ON_ERROR,
          payload: "Invalid login credentials",
        });
      });
  };

export const setLoggedInUserEmail = (email, password) => async (dispatch) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
      onSnapshot(userRef, (doc) => {
        const data = { ...doc.data(doc.id) };
        localStorage.setItem("userInfo", JSON.stringify(data));
        localStorage.setItem("isAuth", true);
        dispatch({ type: actionTypes.LOGGED_IN_STATE, payload: data });
      });
      // ...
    })
    .catch(() => {
      dispatch({
        type: actionTypes.ON_ERROR,
        payload: "Invalid login credentials",
      });
    });
};

export const setLoggedOutState = () => async (dispatch) => {
  try {
    auth
      .signOut()
      .then(() => {
        localStorage.clear();
        window.location.reload(true);
        dispatch({ type: actionTypes.LOGGED_OUT_STATE, payload: null });
      })
      .catch((error) => {
        // An error happened.
        dispatch({ type: actionTypes.ON_ERROR, payload: error });
      });
  } catch (error) {
    dispatch({ type: actionTypes.ON_ERROR, payload: error });
  }
};
