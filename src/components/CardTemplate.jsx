
// eslint-disable-next-line react/prop-types
function CardTemplate({img,title,desc}) {
    
  return (
    <div className="flex flex-row w-full ">
        <div className="flex flex-row w-full">
        <div className="w-[220px]  h-[330px] mt-10 p-2 pt-3 bg-slate-100 ">
            <img src={img}  className=" hover:scale-105 duration-150 ease-in-out w-[100%] h-[150px] rounded-md  "></img>
            <div className="text-xl mt-4 mb-1 font-poppins font-bold ">{title}</div>
            <div className="text-[.60rem] font-Rubik "> 
                {desc}
            </div>
        </div>

        </div>
       
     </div>
  )
}

export default CardTemplate