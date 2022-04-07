import React from 'react'
import './Style.css'

export const Intro = () => {
  return (
    <div className='container text-center my-2'>
        <h2 style={{color:"azure",fontFamily:"fantasy",margin:"10px"}}></h2>
        <div class="d-flex justify-content-between" style={{color:"blanchedalmond", fontSize:"20px", fontFamily:"monospace", marginTop:"10px"}}><span>Vaibhav Kumar</span><span>Birla Institute Of Technology, Mesra, 3rd Year</span></div>
        <div class="d-flex justify-content-between" style={{color:"blanchedalmond", fontSize:"20px", fontFamily:"monospace", marginTop:"10px"}}><span>Nitin Purohit</span><span>SGSITS, Indore 3rd Year</span></div>
        <hr style={{color:"blanchedalmond",marginTop:"20px"}}/>
    </div>
  )
}
