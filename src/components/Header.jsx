import React from 'react'
import logo from "../assets/sail_logo.jpg"
import "../components/Header.css"
import { FaMicrophone } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { FaSun } from 'react-icons/fa6';
import { FaMoon} from 'react-icons/fa6';
import { useState } from 'react';
const Header = () => {
  const [changeBg , setchangeBg] = useState(false)

  function handleBg(){
    setchangeBg(!changeBg)
  }
  return (
    <div className={changeBg ? "Bg" : "newBg"}>
         <div className="header" >
             <img src={logo} alt="" className='logoIMG' />

             <h3 className='logoName'>sail search engines</h3>
              <button className="chaneBg" onClick={handleBg}>
                 {
                  changeBg ?  <FaMoon  className={changeBg ? "moonIcon" : ""} /> :   <FaSun  className={changeBg ? "sunIcon" : ""}  />
                 }
              </button>
         </div>
          <div className="searchBody">
            <div className="firstBox">
                <div className='innerSpan'>
                <button className='microPhoneIcone'> <BsSearch /></button>
                 <input type="search" className="input"/>
                </div>
            </div>
           
          </div>
    </div>
  )
}

export default Header