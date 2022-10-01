import React, {useState} from "react";
import Popup from "./pop1";
import SurgeryCovered from "./surgeriswecover";


function FootText() {
  const [buttonPopUp, setButtonPopUp] = useState(false);
  return (
    <div style={{ textAlign: "center", color: "#FF6949" }}>
      {/* <div className="">
      <h2>List of other surgeries</h2>
      <div className="txt1">
        <span>Hernia treatment</span> |<span> Cataract</span> |
        <span> Circumcision Lasik</span> |<span>Gall Stones</span> |
        <span> Anal Fistula</span> |
      </div>
      <div className="txt1">
        <span> Gynaecomastia</span> |<span> Lipoma Removal</span> |
        <span> Sebaceouscyst</span> |<span> Ovariancyst</span> |
        <span> Pilonidal Sinus</span> |
      </div>
      <div className="txt1">
        <span> Lump in Breast</span> |<span> TURP</span> |
        <span> Hysterectomy</span> |<span> Myomectomy</span>
      </div>
      </div> */}
      <button
        onClick={() =>setButtonPopUp(true)}
        style={{
          margin: "2%",
          border: "2px solid #FF6949",
          backgroundColor: "#FF6949",
          color: "white",
          fontSize: "1rem",
          padding: "1% 1.2%",
        }}
      >
        Show more surgeries
      </button>

      <Popup trigger={buttonPopUp} setTrigger={setButtonPopUp}>
        <SurgeryCovered />

        <div className="">
          <h2>List of other surgeries</h2>
          <div className="txt1">
            <span>Hernia treatment</span> |<span> Cataract</span> |
            <span> Circumcision Lasik</span> |<span>Gall Stones</span> |
            <span> Anal Fistula</span> |
          </div>
          <div className="txt1">
            <span> Gynaecomastia</span> |<span> Lipoma Removal</span> |
            <span> Sebaceouscyst</span> |<span> Ovariancyst</span> |
            <span> Pilonidal Sinus</span> |
          </div>
          <div className="txt1">
            <span> Lump in Breast</span> |<span> TURP</span> |
            <span> Hysterectomy</span> |<span> Myomectomy</span>
          </div>
        </div>
      </Popup>
    </div>
  );
}

export default FootText;
