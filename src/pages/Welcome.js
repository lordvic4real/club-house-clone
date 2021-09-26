import React from "react";
import style from "../styles/welcome.module.css";
import { Link } from "react-router-dom";
export default function Welcome() {
  return (
    <>
      <div className={style.welcomeContainer}>
        <h2> Welcome! </h2>
        <div className={style.welcomeInfo}>
          <p>
            we are ready to get clubhouse ready for everyone while we wrap up
            the finishing touches, we are adding people gradually to make sure
            nothing breaks
          </p>
          <p>
            Explore Explore the hallways Discover millions of rooms, filled with
            fascinating and unexpected conversations. Find Listen in, or share
            your thoughts Drop into your favorite rooms while you’re commuting,
            walking your poodle or running in the park. Raise your hand if you’d
            like to chime in!
          </p>
          <p>paul Rohan and the clubhouse team</p>
          <div className={style.actionBtn}>
            <Link
              exact
              to="/invite"
              className="btn btn-primary d-flex align-items-center mb-3"
            >
              Get your username
              <img src="" alt="" />
            </Link>
            <Link>have an invite text? sign in</Link>
          </div>
        </div>
      </div>
    </>
  );
}
