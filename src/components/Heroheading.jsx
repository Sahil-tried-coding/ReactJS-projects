/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function Heroheading(props) {
  // eslint-disable-next-line react/prop-types
  let heading=props.heading;
  let downHeading = props.downHeading;
  return (
    <div >
        <h1 className="mt-10 font-poppins text-3xl text-center font-bold ">{heading}</h1>
        <h3 className="text-center font-Rubik font-thin">{downHeading}</h3>
    </div>
  )
}

export default Heroheading