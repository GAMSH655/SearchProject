import React from 'react'
import logo from "../assets/sail_logo.jpg"
import "../components/Header.css"
import { FaMicrophone } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
         <div className="header">
             <img src={logo} alt="" className='logoIMG' />
             <h3 className='logoName'>sail search engines</h3>
         </div>
          <div className="searchBody">
            <div className="firstBox">
                <div className='innerSpan'>
                <button className='microPhoneIcone'> <FaMicrophone/></button>
                 <input type="search" className='input' />
                </div>
            </div>
           
          </div>
    </div>
  )
}

export default Header