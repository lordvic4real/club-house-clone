import React from "react";
import style from "../styles/phoneConfirmation.module.css";
import { Link } from "react-router-dom";

export default function AllowNotification() {
  return (
    <>
      <div className={style.phoneConfirmationContainer}>
        <div className="text-center">
          <h1 className="mb-4">Last important step!</h1>
          <h1 className="mb-3">
            Enable notification to known when people are talking{" "}
          </h1>
          <div className={style.notificationContainer}>
            <div className="p-3">
              <h3>"Clubhouse" would like to send you notifications</h3>
              <p className="text-right">
                Notification may include sound, alert, and icon badges
              </p>
            </div>
            <div className={style.action_btn}>
              <Link exact to="/home">
                Dont Allow
              </Link>
              <Link exact to="/home">
                Allow
              </Link>
            </div>
            <img src="images/hand.png" alt="" className={style.hand_icon} />
          </div>
        </div>
      </div>
    </>
  );
}
