import {Outlet} from 'react-router-dom'; //Like this
import React from 'react'


const Layout = () => {  //****If have 'export layout' Need curly brackets when import to somewhere else //Eazy when wanna  import multiple from one source 
  return (

  <div className='fullscreen'>

    <Outlet/>   
  </div>
  )
}

export default Layout