
import './App.css'
import Background from "./components/Background"
import Heroheading from "./components/Heroheading"
import Navbar from './components/Navbar'
import Template from "./components/Template"
import img1 from "./Assets/bern1.jpg"
import img2 from "./Assets/bern2.jpg"
import data from './components/DataTemplate'
import img3 from "./Assets/benz1.webp"
import img4 from "./Assets/benz2.jpg"
import Card from "./components/Card"
// import cardImg from"./components/DataTemplate.js"
import { HeroheadingContent } from './components/DataTemplate'
// import { useContext } from 'react'
// import { myContext } from './Context/DataContext.jsx'
function App() {
  // let value = useContext(myContext);
    let flagTrue = true;
    let flagFalse = false;

  return (
    <div className="overflow-y-hidden">
     <Navbar  />
     <Background />
     <Heroheading heading={HeroheadingContent[0].heading} downHeading={HeroheadingContent[0].downHeading}/>
     <Template img1={img1} flag={flagTrue} img2={img2} Heading={data[0].title} Content={data[0].desc}/>
     <Template img1={img3} flag={flagFalse} img2={img4} Heading={data[1].title} Content={data[1].desc}/>
     <Heroheading heading={HeroheadingContent[1].heading} downHeading={HeroheadingContent[1].downHeading}/>
     {/* <img src={Imgs[0]}/> */}
     <Card/>
     <div>

     </div>
    </div>
  )
}

export default App
