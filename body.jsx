import React from "react";
import './body.css'

function Body(props) {
  const containerCard = {
    width: "367px",
    height: "128px",
    display: "flex",
    padding: "1%",
    border: "1px solid #DFE3E6",
    borderRadius: "12px",
    margin: "15px"
  };
  return (
    <div className="container-card" style={containerCard}>
      <div className="pic" style={{ paddingRight: "15px" }}>
        <img src={props.img} alt="" style={{height:"100px", width:"100px", borderRadius:"10%"}} className="surgery-card"/>

      </div>
      <div className="txt" style={{ color: "#40464D" ,lineHeight:"10px"}}>
        <h3 style={{ paddingBottom: "-4%  !important", fontSize:"20px"}}>{props.name}</h3>
        <span style={{fontSize:"14px" ,lineHeight:"20px"}}>{props.text}</span>
      </div>
    </div>
  );
}

export default Body;
