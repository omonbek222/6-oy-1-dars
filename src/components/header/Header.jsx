import React, { Fragment } from 'react'
import "./index.css"
function Header() {
  return (
    <Fragment>



<div>
<header>
  <div className="container">
     <nav>
        <div className="logo">
          <h2 className='phone_h2'>
          APPSTORE.UZ <br/>
          Uzbekistan
          </h2>
        </div>
        <ul>
          <li><a className='nav_ul' href="">home</a></li>
          <li><a className='nav_ul' href="">Galery</a></li>
          <li><a className='nav_ul' href="">News</a></li>
          <li><a className='nav_ul' href="">About us</a></li>
        </ul>
     </nav>
     <div className="header_main">
        <h1 className='phone_h1'>iPhone 12 pro</h1>
        <p className='phone_p1'>The iPhone 12 Pro and iPhone 12 Pro Max are part of Apple's <br /> latest generation of smartphones, offering 5G connectivity, the <br /> A14 chip for better performance, </p>
        <div className="btn">
          <button className='phone_buton1'>Order now</button>
          <button className='phone_buton2'>Learn more</button>
        </div>
        <div className="header_main_footer">
          <div className="son">
            <p className='phone_p2'>01</p>
            <p className='phone_p2'>02</p>
            <p className='phone_p2'>03</p>
            <p className='phone_p2'>04</p>
          </div>
          <div className="icons">

    
          </div>
        </div>
     </div>
  </div>
</header>
 <div className="img">
  
 </div>
 <img src="./img./" alt="" />
</div>





    </Fragment>
  )
}

export default Header
