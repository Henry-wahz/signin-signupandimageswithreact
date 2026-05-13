import "./flipcard.css"

export default function FlipCard({ item }) {
    return(
        <div className="flip-card">
            <div className="flip-inner">
                <img src={item.img} alt={item.lbl} />
                <div className="flip-front">
                    <div className="front-label">{item.lbl}</div>
                </div>
            </div>
        </div>
    )
}