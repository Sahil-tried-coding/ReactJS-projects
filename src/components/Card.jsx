// import CardTemplate from "./CardTemplate"
import imgx1 from "../Assets/india.jpg"
import imgx2 from "../Assets/saudi.jpg"
import imgx3 from "../Assets/mamaisia.webp"
import CardTemplate from "./CardTemplate"

function Card() {
    // let Imgs=[imgx1,imgx2,imgx3]

    let cardData =[
{       img:imgx1,
    title:"India",
    desc:"India, officially the Republic of India  a country in South Asia. It is the seventh-largest country by area;the world's most populous democracy.It is physiographically bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, the Bay of Bengal on the southeast, and High-mountain Asia on the northeast."
},{
    img:imgx2,
    title:"Saudi Arabia",
    desc:"Saudi Arabia,[e] officially the Kingdom of Saudi Arabia (KSA), is a country in West Asia and the Middle East. It covers the bulk of the Arabian Peninsula the fifth-largest country in Asia and the largest in the Middle East. the Peaceful religion Islam is from here"
},{
    img:imgx3,
    title:" Malaysia",
    desc:"Malaysia[d] is a country in Southeast Asia. The federal constitutional monarchy consists of 13 states and three federal territories, separated by the South China Sea into two regions: Peninsular Malaysia and Borneo's East Malaysia. Pe. Kuala Lumpur is the national capital"
}]
  return (
    <div className="flex xs:flex-col ml-12 ">
        {
            cardData.map((data,index)=>{
                return<CardTemplate key={index} img={data.img} title={data.title} desc={data.desc} />
            })
        }
    </div>
  )
}

export default Card