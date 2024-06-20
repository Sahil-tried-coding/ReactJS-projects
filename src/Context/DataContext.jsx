import imgx1 from "../Assets/india.jpg"
import imgx2 from "../Assets/saudi.jpg"
import imgx3 from "../Assets/mamaisia.webp"
// import React from "react"
import {createContext} from "react"


    // create provide consume 
    export const myContext= createContext()
    
let randi = "randi"
    let value = [
        imgx1,imgx2,imgx3,randi
    ]


    // eslint-disable-next-line react/prop-types
    export   const ImgProvider = ({children})=>{
          return(
              <myContext.Provider  value={value} >
                {children}
            </myContext.Provider>
        )
    }
    

// export default DataContext
// export default [myContext,ImgProvider]