import React from 'react'
import { MdMenu } from 'react-icons/md'

export default () => {
    return (


        <div className="header-div">
            <button onClick={this.handleClick} className="menu_btn">
                <MdMenu style={{ color: "#000040" }} size={34} />
            </button>
            <h2>Notificações</h2>
        </div>


    )
}


// export const HeaderPerf = () => {
//     return (
//       <div className="header-div">
//         <button onClick={this.handleClick} className="menu_btn">
//           <MdMenu style={{ color: "#000040" }} size={34} />
//         </button>
  
//       </div>
//     )
//   }