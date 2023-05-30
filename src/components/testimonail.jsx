import "./Testimonial.css"
import quote from "../assets/bg-pattern-quotation.svg"
export default function Testimonial(props){
    return(
        <article className={`testimonial--${props.item.id}   ${(props.item.id=== 1 || props.item.id === 4) && "col-span-2"} `} >
            <div className="testimonial--details">
                <img src={`./src/assets/image-${props.item.pfp}.jpg`}/>
                <div>
                    <h5>{props.item.name}</h5>
                    <p>Verified Graduate</p>
                </div>
            </div>
            {props.item.id === 1 && <img className="testimonial--quotes"src={quote}/>}
            <h3>{props.item.mainComment}</h3>
            <p className="testimonial--mainComment">{props.item.fullComment}</p>
        </article>
    )
}