

// export default Navbar
// import {useState} from "react"
import "./Navbar.css"
import MenuItems from "./MenuItems"
function Navbar() {
  // const [state,setState]=useState(true)
  // function changeHandler (){
  //     setState(!state)
  // }
  
  return (
    <div className=" navbar z-20 h-8 flex text-sm font-poppins items-center my-2 fixed justify-center text-black w-11/12 bg-white mx-7 gap-3">
      <h1 className="title mr-[10rem] text-black font-semibold">Trippy</h1>
      <div className="gap-1 flex flex-col lg:flex-row items-center ">
      {
        MenuItems.map((items,index)=>{
          return(
            <div className=" text-xs flex gap-1" key={index}>
               <h1><i key={index} className={items.icon}></i></h1>
                <h3 className="mr-3 text-xs cursor-pointer " key={index}>{items.title }</h3>
            </div>
          )
        })
      }
      <button className="button bg-black text-white h-5 my-2 w-20 rounded-md ">Sign-up</button>

      </div>
      {/* <div onClick={changeHandler}> */}
      {/* <i  className={state?"fa-solid fa-bars":"fa-solid fa-times"} ></i> */}

      {/* </div> */}
      {/* <i className="fa-solid fa-times"></i> */}
    </div>
  )
}

export default Navbar

// import  { useState } from "react";
// import "./Navbar.css";
// import MenuItems from "./MenuItems";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleNav = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar z-20 h-8 flex text-sm font-poppins items-center my-2 fixed justify-center text-black w-11/12 mx-7 gap-3">
//       <div className="lg:hidden flex items-center">
//         <button onClick={toggleNav} className="text-black">
//           <i className="fas fa-bars"></i>
//         </button>
//       </div>
//       <div className={`lg:flex ${isOpen? "" : "hidden"}`}>
//         <h1 className="title mr-[10rem] text-black font-semibold">Trippy</h1>
//         <div className="flex gap-1 icons items-center">
//           {MenuItems.map((item, index) => (
//             <div className="text-xs flex gap-1" key={index}>
//               <h1><i key={index} className={item.icon}></i></h1>
//               <h3 className="mr-3 text-xs cursor-pointer" key={index}>{item.title}</h3>
//             </div>
//           ))}
//           <button className="button bg-black text-white h-5 my-2 w-20 rounded-md lg:hidden">Sign-up</button>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
