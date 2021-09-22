import React, { useState, useEffect } from "react";
import style from "../styles/roomCard.module.css";
import { data } from "./data/roomCard";
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from "react-icons/bs";

export default function RoomInfoCard(props) {
  return (
    <>
      <h1>hello</h1>
      {data &&
        data.map((item) => (
          <div>
            <div>
              <div className={style.roomCardContainer} key="id">
                <h6>{item.title}</h6>
                <h2>{item.subtitle}</h2>
                <div className={style.roomMembers}>
                  <div>
                    <img src="/images/groomsmen-2.jpg" alt />
                    <img src="/images/groomsmen-3.jpg" alt />
                  </div>
                  <div>
                    {item.members.map((person) => (
                      <p>
                        {person.first_name} {person.last_name} <BsChatDots />
                      </p>
                    ))}
                    <p className="d-flex align-items-center">
                      <span className="mr-2">1.8</span>
                      <BsFillPersonFill className="ml-4" />
                      &nbsp;&nbsp;
                      <span className="mx-2"></span>{" "}
                      <span className="mr-2">5</span>&nbsp;&nbsp;{" "}
                      <BsChatDotsFill />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
