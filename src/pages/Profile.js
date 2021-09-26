import React from "react";
import exploreStyle from "../styles/explore.module.css";
import style from "../styles/profile.module.css";
import { Link } from "react-router-dom";
import { BsAt, BsPlus, BsUpload } from "react-icons/bs";
import {
  AiOutlineInstagram,
  AiOutlineSetting,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Profile() {
  return (
    <>
      <div className={exploreStyle.hearder}>
        <div
          className={`${exploreStyle.head}  mb-0`}
          style={{ textAlign: "right" }}
        >
          <Link to="/home">
            <img
              src="/images/back-arrow.png"
              className={exploreStyle.arrow_icon}
            />
          </Link>
          <div className={style.actionBtn}>
            <BsAt />
            <BsUpload />
            <AiOutlineSetting />
          </div>
        </div>
      </div>
      <div className={style.profileContainer}>
        <img
          src="/images/groomsmen-3.jpg"
          alt=""
          className={style.profile_image}
        />
        <h4>Victor David U</h4>
        <p>@Lordvic4real</p>
        <div className={style.follow}>
          <p>
            <span>0</span> followers
          </p>
          <p>
            <span>64</span> following
          </p>
        </div>
        <button>Add a bio</button>
        <div className="mb-4">
          <button className="mb-0">
            <AiOutlineTwitter />
            Add Twitter
          </button>
          <button className="mb-0">
            <AiOutlineInstagram />
            Add Instagram
          </button>
        </div>
        <div className={style.nominated}>
          <img src="/images/groomsmen-2.jpg" alt="" />
          <div>
            <p>Joined 14-september-2021</p>
            <p>
              nominated by <span>Bidemi Philio</span>
            </p>
          </div>
        </div>
        <p>Member of</p>
        <button className={style.addMemberBtn}>
          <BsPlus />
        </button>
      </div>
    </>
  );
}
