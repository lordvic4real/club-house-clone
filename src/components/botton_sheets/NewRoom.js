import React, { useState } from "react";
import style from "../../styles/roomDetail.module.css";
import { AiOutlineFile, AiOutlinePlus } from "react-icons/ai";
import { BsMicMuteFill, BsMicFill } from "react-icons/bs";

export default function NewRoom(props) {
  const [micMuteVisible, setMicMuteVisible] = useState();
  const card = props.cardDetail;
  console.log(card);
  return (
    <>
      {" "}
      <div className={style.roomDataContainer}>
        <div className={style.head}>
          <div className="d-flex align-items-center">
            <Link
              to="/home"
              onClick={() => {
                props.setSheetVisible(false);
              }}
            >
              <img
                src="/images/back-arrow.png"
                alt=""
                className={style.arrow_icon}
              />
            </Link>
            <span>Hallway</span>
          </div>
          <div>
            <AiOutlineFile />
            <img
              src="/images/groomsmen-3.jpg"
              alt=""
              className={style.profile_img}
            />
          </div>
        </div>
        <div className={style.roomDetailCard}>
          <div
            className="d-flex justify-content-between align-items-center flex-wrap"
            style={{ padding: "0.5em 1em " }}
          >
            {card.map((person) => (
              <div className={style.memberContainer}>
                {micMuteVisible ? (
                  <div className={style.audio_icon}>
                    <BsMicMuteFill />
                  </div>
                ) : (
                  ""
                )}
                <img src="/images/groomsmen-2.jpg" alt="" />
                <p>
                  {" "}
                  <span>*</span>
                  {person?.first_name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.footer}>
          <button onClick={() => props.setSheetVisible(false)}>
            <img src="/images/hand-peace.jpg" alt="" />
            Leave Quietly
          </button>
          <div>
            <button>
              <AiOutlinePlus />
            </button>
            <button>
              <img src="/images/stop-hand-icon.png" alt="" className="s-hand" />
            </button>
            <button onClick={() => setMicMuteVisible(!micMuteVisible)}>
              {micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
