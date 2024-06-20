
// function Template({Heading}) {
    
    
    // let Content="uhfdjngvhn,mb n,gbv,nb uhfdjngvhn,mb n,gbv,nbuhfdjngvhn,mb n,gbv,nbuhfdjngvhn,mb n,gbv,nbuhfdjngvhn,mb n,gbv,nbuhfdjngvhn,mb n,gbv,nbuhfdjngvhn,mb n,gbv,nbuhfdjngvhn,mb n,gbv,nbuhfdjngvhn,mb n,gbv,nbuhfdjngvhn,mb n,gbv,nbuhfdjngvhn,mb n,gbv,nbuhfdjngvhn,mb n,gbv,nb"
//   return (
//     <div className="flex justify-evenly">
//         {/* left side  */}
//         <div className="w-[25rem]">
//             <span className="text-xl font-semibold">{Heading}</span><br/>
//             {/* {Content} */}
//         </div>
//         {/* right side  */}
//         <div>

//         </div>
//     </div>
//   )
// }

// export default Template

// eslint-disable-next-line react/prop-types
function Template({ Heading, Content ,img1,img2}) {
  // Directly use Heading and Content from props


  
  return (
      <div className="flex p-10 ">
          {/* left side  */}
         
            <div className="w-[25rem] mt-5">
            <span className="text-xl font-semibold ">{Heading}</span><br/>
            <div
             className="text-xs font-semibold w-[90%] mt-5">
            {Content}
            </div>
        </div>
        {/* right side  */}
        <div className="overflow-x-hidden flex ">
        <img className="object-cover w-[200px] mt-10 mr-4 h-[230px] " src={img1}/>
          <img className="object-cover w-[200px] mt-5 h-[230px]" src={img2}/>
        </div>
          
      </div>
  );
}

export default Template;
 