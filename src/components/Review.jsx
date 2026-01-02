import Image from '../assets/logo.svg'
import { PiUserBold, PiUserCircle ,PiUserLight } from "react-icons/pi";
import { MdOutlineStarBorder } from "react-icons/md";
function Review(props){
    
    const item = props.item.reviews
    console.log(item);
    
    

    return(
        <>
        <div className="comments">
        {item.map((review,index)=>(
            <div className="comment" key={index}>
            <span className="name">
                {/* <PiUserBold className='user' /> */}
               <img src={Image} alt="" className='user'/>
               {review.reviewerName}
                </span>
            <span className="email">{review.reviewerEmail} </span>
            <span className="rate">
                {'⭐'.repeat(review.rating)} &nbsp;&nbsp;{review.date}
            </span>
            <span className="text">{review.comment} </span>


        </div>
        ))}
        </div>

        
        
        </>
    )

}

export default Review