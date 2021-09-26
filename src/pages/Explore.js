import React from "react";
import style from "../styles/explore.module.css";
import { DownOutlined, FireOutlined } from "@ant-design/icons";
import data from "../components/data/Explore.json";
import { Input } from "antd";
import SubHeader from "../components/SubHeader";

export default function Explore() {
  const { people, conversation } = data;
  return (
    <>
      <div className={style.exploreContainer}>
        <div className={style.header}>
          <SubHeader pageTitle="Explore" />
          <Input
            style={{
              backgroundColor: "#f4f4f4",
              borderRadius: "0.8em",
              padding: "0.3em 1em",
              border: "none",
              boxShadow: "none",
            }}
            placeholder="find people and clubs"
            size="large"
            prefix={<img src="/images/search.png" width="15px" alt="" />}
          ></Input>
        </div>
        <h6>People to Follow</h6>
        <div className={style.peopleContainer}>
          {people.map((item) => (
            <>
              <div className="d-flex align-items-center ">
                <img src="/images/groomsmen-3.jpg" alt="" />
                <div className="ml-2">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
                <button>Follow</button>
              </div>
            </>
          ))}
          <button className={style.showMore}>
            Show more People <DownOutlined />
          </button>
        </div>
        <h6>FIND CONVERSATION About....</h6>
        <div className="row mx-0">
          {conversation.map((item) => (
            <div className=" col-6 px-2 mb-3">
              <div className={style.conversationCard}>
                <h6>
                  <FireOutlined />
                  {item.title}
                </h6>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
