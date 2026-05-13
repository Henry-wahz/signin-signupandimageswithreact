
import "./flipcard.css"
export default function FlipCard({ item }) {
    return(
        <div className="front">
            <div className="front-image">
                <img src={item.img} alt={item.lbl} />
            </div>
                
            <div className="front-label">{item.lbl}</div>
                
            
        </div>
    )
}