import React from "react";
import { data } from "./data/dailyCard";
import style from "../styles/dailyInfoCard.module.css";
console.log(data);
export default function DailyInfoCard() {
  return (
    <>
      <div className={style.dailyCard}>
        {data &&
          data.map((item, id) => (
            <div>
              <span key={id}>{item.time}</span>
              <div>
                <span>{item.title}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
