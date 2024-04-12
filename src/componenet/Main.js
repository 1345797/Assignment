import React from 'react'
import data from '../data.json'
import Header from './Header.js'


const Main = () => {
 const adminrole=data.filter((ele)=>{
      return ele.role==="admin"
    })
    
    const memberRole=data.filter((ele)=>{
        return ele.role==="member"
      })
  return (
    <div>
      <Header/>
      <h1 className='header-main'>Administrators</h1>
      <div className="container">
        <div className="row ">
    {  
      adminrole.map((ele)=>{
        return (
            <div style={{padding:"15px", fontFamily:'Poppins' }} className='col-md-3 '>
            <div class="col" style={{display:"flex",  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius:"10px" }}>
                <div class="p-3 border bg-light "  >
                    <img src={ele.img} alt="" style={{boxSizing:'border-box',width:'60px',height:'60px',borderRadius:"50%"}}/>
                </div>
                <div style={{width:"60%"}}>
                <h5 style={{fontSize:'18px'}}>{ele.first_name}</h5>
                <p style={{wordBreak:'break-all', fontSize:'12px',color:'#757575'}}>{ele.email}</p>
                </div>
        </div>
        </div>
        )
      })
    }
      </div>
      </div>
        <hr />
      <h1 className='header-main'>Members</h1>
      <div className="container" >
        <div className="row ">
    {  
      memberRole.map((ele)=>{
        return (
            <div style={{padding:"15px", fontFamily:'Poppins'}} className='col-md-3'>
            <div class="col" style={{display:"flex",  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", borderRadius:"10px" }}>
                <div class="p-3 border bg-light "  >
                    <img src={ele.img} alt="" style={{boxSizing:'border-box',width:'60px',height:'60px',borderRadius:"50%"}}/>
                </div>
                <div style={{width:"60%"}}>
                <h5 style={{fontSize:'18px'}}>{ele.first_name}</h5>
                <p style={{wordBreak:'break-all', fontSize:'12px',color:'#757575'}}>{ele.email}</p>
                </div>
          </div>
      
        </div>
        )
      })
    
    }
  
      </div>
      <div className="row" >
        <div className='col-md-11'></div>
        <div  className='col-md-1'>
        <div className="icon-circle" >
           <i className="fas fa-plus"></i>
        </div>
        </div>
      </div>
      </div>
      

    </div>
  )
}

export default Main