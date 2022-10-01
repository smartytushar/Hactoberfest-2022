import React from 'react'
import './benefit.css'


function Benefit(props) {
    const circle = {
        width:'145px',
        height:'145px',
        borderRadius:'50%',
        backgroundColor:'#FFD2A2'
    }
    const circle2 = {
        width:'40px',
        height:'40px',
        borderRadius:'50%',
        backgroundColor:'#FF6949D4',
        position:'relative',
        left:'32%',
        top:'-62%'
    }
    // const txt =
  return (
    <div style={{width:'350px',margin:'0 1%'}}>
        <div style={circle}></div>
        <div style={circle2}></div>
        <div style={{
      position:'relative',
      width:'55%',
      left:'27%',
      top:'-55%'
    }}>{props.text}</div>
    </div>
  )
}

function Benefits() {
  return (
    <div className='main'>
      <div className="head">
        <h1>Benefits</h1>
      </div>

      <div
        style={{
          padding: "2%",
          display: "flex",
          justifyContent: "center",
          margin: "0 2%",
        }}
      >
        <Benefit text="Free second opinion with the surgeon" />
        <Benefit text="Free pickup and drop service" />
        <Benefit text="Deposit-free admission for patients with insurance" />
        <Benefit text="Free upgrade to a private room" />
      </div>
    </div>
  );
}

export default Benefits;