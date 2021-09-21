import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import style from "../styles/phoneConfirmation.module.css";

export default function PhoneConfirmation() {
  const [value, setValue] = useState();
  return (
    <>
      <div className={style.phoneConfirmationContainer}>
        <Link exact to="/" className={style.backBtn}>
          <img src="/images/back-arrow.png" alt="" />
        </Link>
        <h1>Enter your phone</h1>
        <PhoneInput
          international
          defaultCountry="NG"
          value={value}
          onChange={setValue}
        />
        <p>
          By entering your number you agree to our terms and condition
          <span>Terms of services and privacy</span> Thanks!
        </p>
        <Link
          exact
          to="/code_confirm"
          className="primaryBtn d-flex align-items-center "
        >
          Next <span> {" > "} </span>
        </Link>
      </div>
    </>
  );
}
