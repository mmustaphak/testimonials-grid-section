import "./Testimonial.css"
import quote from "../assets/bg-pattern-quotation.svg"
export default function Testimonial(props){
    return(
        <article>
            <div className="testimonial--details">
                <img src={`./src/assets/image-${props.pfp}.jpg`}/>
                <div>
                    <h5>{props.name}</h5>
                    <p>Verified Graduate</p>
                </div>
            </div><img className="testimonial--quotes"src={quote}/>
            <h3>{props.mainComment}</h3>
            <p className="testimonial--mainComment">{props.fullComment}</p>
        </article>
    )
}