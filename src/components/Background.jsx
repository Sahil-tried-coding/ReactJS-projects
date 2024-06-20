import img from '../Assets/780b4c25e8a33b2a1ebc880bc2d334e6.jpeg'
function Background() {
    return (
      <div className=" realtive w-full text-center h-screen overflow-hidden items-center">
        <img
          className="    w-full h-full "
          src={img}
        //   src=~~"https://wallpaper.forfun.com/fetch/9a/9ab7ecbb12d9d16469363a27f6104f9c.jpeg?download=man_made-village-city-lake-landscape-montreux-mountain-nature-switzerland-town-609327.jpeg"
        />
        <h1 className=" bottom-[12rem] left-[20rem] absolute font-bold text-2xl text-center text-white">Your Journey Your Story</h1>
        <h3
         className=" absolute  font-thin text-white bottom-[10rem] left-[22rem] text-sm ">
            Choose your favourite Destination </h3>
            <button className="absolute w-[6rem] h-[1.4rem] font-semibold text-xs text-center bg-white text-black bottom-[8rem] left-[26rem]">
              Travel Plan
            </button>
      </div>
    );
  }
  
  export default Background;

// function Background() {
//     return (
//       <div className="w-full text-center h-screen flex items-center justify-center overflow-hidden ">
//         <img
//           className="w-full h-full object-cover"
//           src="https://wallpaper.forfun.com/fetch/9a/9ab7ecbb12d9d16469363a27f6104f9c.jpeg?download=man_made-village-city-lake-landscape-montreux-mountain-nature-switzerland-town-609327.jpeg"
//         />
//         <h1 className="font-bold text-center text-red-700">Your Journey Your Story</h1>
//       </div>
//     );
//   }
  
//   export default Background;
  
  