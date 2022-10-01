import React from 'react'
import call from './Pic/call.png'

function Download() {
  return (
    <div style={{textAlign:'left'}}>
        <span style={{fontWeight: '600',fontSize: '18px',lineHeight: '26px'}}>Download thePracto app</span><br />
        <span style={{fontWeight: '300',fontSize: '14px',lineHeight: '26px',width:'363px'}}>Access video consultantation with india’s top doctors </span><br />
        <span style={{fontWeight: '300',fontSize: '14px',lineHeight: '26px',width:'363px'}}>on the Practo app. Connect with doctors online,</span><br />
        <span style={{fontWeight: '300',fontSize: '14px',lineHeight: '26px',width:'363px'}}> available 24/7, from the comfort of your home.</span><br /><br />
        <span style={{fontWeight: '600',fontSize: '14px',lineHeight: '26px'}}>Get the link to download the app</span>
        <div>
            <div style={{display:'flex',flexDirection:'row'}}>
                <input value='+91' type="text/number" style={{border:'solid 1px #000', width:'7%',padding:'1%'}}/>
                <input value='' type="text/number" style={{border:'solid 1px #000',padding:'1%',width:'30%'}}/>
                <button style={{borderRadius:'6px',backgroundColor:'#18C8FF',width:'90px',border:'none', marginLeft:'2%'}}>Send SMS</button>
            </div>
            <div className="req" style={{display:'flex',flexDirection:'row',position:'relative',margin:'1%',alignItems:'center',borderRadius:'50px',width:'240px',border:'1px solid #40464D80',right:'-82%',top:'-120px'}}>
                <img src={call} alt="" style={{width:'70px',height:'70px',padding:'5%'}}/>
                <div  ><span>Request for </span><br />
                <span>call back</span></div>
            </div>
        </div>
    </div>
  )
}

export default Download