import React from "react";
import style from "../styles/phoneConfirmation.module.css";
import { Link } from "react-router-dom";

export default function CodeConfirm() {
  return (
    <>
      <div className={style.phoneConfirmationContainer}>
        <Link exact to="/" className={style.backBtn}>
          <img src="/images/back-arrow.png" alt="" />
        </Link>
        <div className="text-center">
          <h1
            style={{
              width: "100%",
              maxWidth: "200px",
              marginBottom: "1em",
              textTransform: "capitalize",
            }}
          >
            please enter the code we just sent you
          </h1>
          <input
            type="text"
            style={{
              width: "100%",
              border: "none",
              textAlign: "center",
              outline: "none",
            }}
          />
          <p className="mt-2">
            Didnt recieve it? <span>Tap to resend</span>
          </p>
        </div>
        <Link
          exact
          to="/allow_notification"
          className="primaryBtn d-flex align-items-center"
        >
          Next {" > "}
        </Link>
      </div>
    </>
  );
}
