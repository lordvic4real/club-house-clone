import React from "react";
import style from "../styles/header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className={style.header}>
        <Link exact to="/explore">
          <img src="/images/sch.png" alt="" />
        </Link>
        <div className={style.nav_items}>
          <Link exact to="/friends_invite">
            <img src="/images/finvite.png" alt="" />
          </Link>
          <Link exact to="/upcoming">
            <img src="/images/calender.png" alt="" />
          </Link>
          <Link exact to="/activity">
            <img src="/images/bell.png" alt="" />
          </Link>
          <Link exact to="/profile">
            <img src="/images/avatar.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
