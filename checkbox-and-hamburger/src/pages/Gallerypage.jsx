import "./gallery.css"
import FlipCard from "./Flipcard"
import { IMAGES } from "./Gallery"


export default function Gallery(){
    return(
        <div className="gallery">
            <div className="header">
                <div className="header-left">
                     <img src="https://img.magnific.com/premium-photo/geometric-shapes-symbolizing-speed-innovation-tech-startup_839740-2584.jpg" alt="logo" />
                     <h3><i>Lady Midnight🌙</i></h3>
                </div>
                <div className="header-right">
                   <button className="signout-btn">SignOut</button>
                </div>

            </div>
            <div className="main">
             <div className="main">
                <div className="grid">
                    {IMAGES.map((item, i)=> (
                        <FlipCard key={i} item={item}/>
                    ))}
                </div>
            </div>
            </div>

        </div>
    )
}