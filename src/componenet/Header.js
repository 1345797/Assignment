import React from 'react'
import './styles/Header.css'
import { CiSearch } from "react-icons/ci";





const Header = () => {
  return (
    <div className='header-container'>
    <div className='container'>
        <div className="row">
            <div className='col-md-4' style={{justifyContent:'center',}}>
                <h1 id='header'>Team</h1>
            </div>
            <div className='col-md-4'></div>
            <div className="col-md-4">
            <CiSearch className='searchIcon'/>
                <input  type="text" className='serach-input' placeholder="Search"/>
            </div>
          

        </div>
        
        
         {/* <button >
          <i class="fas fa-search"></i>
         </button> */}

    </div>
    </div>
  )
}

export default Header