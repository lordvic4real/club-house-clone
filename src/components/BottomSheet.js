import React from "react";
import SwipeapleBottomSheet from "react-swipeable-bottom-sheet";
import style from "../styles/bottomSheet.module.css";
import StartRoom from "./botton_sheets/StartRoom";
import NewRoom from "./botton_sheets/NewRoom";

export default function BottomSheet(props) {
  return (
    <>
      <SwipeapleBottomSheet
        open={props.sheetVisible}
        onChange={() => {
          props.setSheetVisible(!props.setsheetVisible);
          props.setItemVisible(true);
        }}
        fullScreen={props.sheetTitle === "room detail" ? true : false}
      >
        <div
          className={style.BottomSheetContainer}
          style={{
            backgroundColor:
              props.sheetTitle === "profile" ? "transparent" : "",
          }}
        >
          {props.sheetTitle === "new room" ? (
            <NewRoom
              cardDetail={props.cardDetail}
              setSheetVisible={(item) => {
                props.setSheetVisible(item);
                props?.setItemVisible(true);
              }}
            />
          ) : props.sheetTitle === " start room" ? (
            <StartRoom
              setSheetCreateRoom={props.setSheetCreateRoom}
              setSheetVisible={(item) => {
                props.setSheetVisible(item);
                props.setItemVisible(true);
              }}
            />
          ) : (
            ""
          )}
        </div>
      </SwipeapleBottomSheet>
    </>
  );
}
