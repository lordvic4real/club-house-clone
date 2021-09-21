import React, { useState, useEffect } from "react";
import style from "../styles/roomCard.module.css";
import { data } from "./data/roomCard";

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
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
