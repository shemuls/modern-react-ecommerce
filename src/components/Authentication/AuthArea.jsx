import {
  faFacebookF,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase/app";
import "firebase/auth";

import React, { useState, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ModernEcommerceContext } from "../../App.js";
import { firebaseConfig } from "./firebaseConfig.js";
import { Login } from "./Login/Login.jsx";
import { Register } from "./Register/Register.jsx";
import { useForm } from "react-hook-form";

export const AuthArea = () => {
  const [loginPopup, setLoginPopup] = useState(true);

  const loginPopupHandler = (logReg = "login") => {
    if (logReg === "login") {
      setLoginPopup(true);
    } else if (logReg === "register") {
      setLoginPopup(false);
    } else {
      setLoginPopup(true);
    }
  };

  const location = useLocation();
  const history = useHistory();
  const { from } = location.state || { from: { pathname: "/" } };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const { setLoggedInUser } = useContext(ModernEcommerceContext);

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        setLoggedInUser({
          isSingedUser: true,
          email: email,
          displayName: displayName,
          photoUrl: photoURL,
          error: "",
          succes: "Logged Successfully!",
        });
        email && history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoggedInUser({
          isSingedUser: false,
          email: "",
          displayName: "",
          photoUrl: "",
          error: errorMessage,
          succes: "",
        });
      });
  };

  // Form handling
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // Register form
  const registerFormHanlder = (data) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;

        setLoggedInUser({
          isSingedUser: true,
          email: email,
          displayName: displayName,
          photoUrl: photoURL,
          error: "",
          succes: "Logged Successfully!",
        });
        email && history.replace(from);

        reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoggedInUser({
          isSingedUser: false,
          email: "",
          displayName: "",
          photoUrl: "",
          error: errorMessage,
          succes: "",
        });
      });
  };
  // login form
  const loginFormHanlder = (data) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        setLoggedInUser({
          isSingedUser: true,
          email: email,
          displayName: displayName,
          photoUrl: photoURL,
          error: "",
          succes: "Logged Successfully!",
        });
        email && history.replace(from);

        reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoggedInUser({
          isSingedUser: false,
          email: "",
          displayName: "",
          photoUrl: "",
          error: errorMessage,
          succes: "",
        });
      });
  };

  return (
    <div className="row w-50 my-5 mx-auto p-5 shadow card">
      <div className="d-flex justify-content-around">
        <div className="w-50">
          <button
            onClick={() => loginPopupHandler("login")}
            className="btn btn-outline-danger w-100 rounded-0 btn-lg"
          >
            Login
          </button>
        </div>
        <div className="w-50">
          <button
            onClick={() => loginPopupHandler("register")}
            className="btn btn-warning w-100 rounded-0 btn-lg"
          >
            Register
          </button>
        </div>
      </div>

      <div className="col">
        <div className="mt-5">
          {/* login form */}
          {loginPopup ? (
            <Login
              register={register}
              handleSubmit={handleSubmit}
              loginFormHanlder={loginFormHanlder}
              errors={errors}
              reset={reset}
            />
          ) : (
            <Register
              register={register}
              handleSubmit={handleSubmit}
              registerFormHanlder={registerFormHanlder}
              errors={errors}
              reset={reset}
            />
          )}
          <div className="row text-center mt-4">
            <h4>or</h4>
            <p>Login with your social media</p>
            <div className="d-flex justify-content-center">
              <div className="btn btn-outline-secondary shadow">
                <FontAwesomeIcon icon={faFacebookF} /> Facebook
              </div>
              <div
                onClick={loginWithGoogle}
                className="btn btn-outline-danger shadow mx-2"
              >
                <FontAwesomeIcon icon={faGoogle} /> Google
              </div>
              <div className="btn btn-outline-primary shadow">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
