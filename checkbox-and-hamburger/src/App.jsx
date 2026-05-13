// import { useState } from "react";
// import "./Hamburger.css"
// export default function Hamburger(){
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
//     <p>CLick on the Menu Icon to transform it to "X":</p>
//     <div className={`container ${isOpen? "change" : ""}`}
//     onClick={()=>setIsOpen(!isOpen)}
//     >
//       <div className="bar bar1" style={{backgroundColor: "red"}}></div>
//       <div className="bar bar2" style={{backgroundColor: "green"}}></div>
//       <div className="bar bar3" style={{backgroundColor: "blue"}}></div>
    
//     </div>
//     </>
//   )
// }
import Authpage from "./pages/Authpage";
import "./App.css";
import Gallery from "./pages/Gallerypage";

import { BrowserRouter, Routes, Route } from "react-router-dom";


export default function App(){
  return (
    <>
     
       <BrowserRouter>
   <Routes>
      <Route path="/" element={<Authpage/>}/>
      <Route path="/Gallery" element={<Gallery/>} />
   </Routes>
   
   </BrowserRouter>
    </>
  )
}