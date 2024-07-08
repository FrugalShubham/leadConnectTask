import React from 'react'
import Image from "next/image";
import photo from '../img/photo.png'


const Body = () => {
  return (
    <div className='body-container'>
         <div className="row responsive-flex">
          <div className="col-40">
<div className="card">
<Image src={photo} alt="Logo" />
</div>
          </div>
          <div className="col-60">
            <div className="right-wrapper">
              
<h1 style={{fontSize:'30px',fontWeight:'bold'}}>Are you ready to be part of a Top Global University?</h1>
<small style={{fontSize:'15px'}}>My Mentor has successfully got students accepted across top IVY League Colleges, Russel Group Institutions, Group 8 Institutions and other prestigious universities across the globe.</small>
<p><br></br><small style={{fontSize:'15px'}}>
  If you have a study abroad dream, we can make it happen.
  </small></p>
         <h2 style={{fontSize:'20px',fontWeight:'bold',color:'red'}}>Book a free consultation today!</h2>
         <p>Are you a student or guardian?</p>
         <div className="form">
          <div className="flex">
            <div className="checkbox-wrapper"><input type="radio" name="checkme" id="" /><label htmlFor="">Label 1</label></div>
            <div className="checkbox-wrapper"><input type="radio" name="checkme" id="" /><label htmlFor="">Label 2</label></div>
          </div>
          <div className="input-wrapper"><input type="text" name="" id="" placeholder='Your First Name' /></div>
          <div className="input-wrapper"><input type="text" name="" id="" placeholder='Your Mobile number' /></div>

          <button className="button-wrapper">
                Submit
              </button>

         </div>
        
            </div>
              </div>
         </div>
    </div>
  )
}

export default Body