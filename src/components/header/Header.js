import React from 'react';
import './Header.css'

let Header=(props)=>{
    
  
  return(
      <div className="header">
          <h1 className="logo">Food Corner</h1>
           <nav>
               <button onClick={e=> props.onRecipeSelect('Indian')}>Indian</button>
               
               
           </nav>

      </div>
  )
}


export default Header;