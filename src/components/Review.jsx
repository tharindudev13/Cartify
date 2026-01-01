import Image from '../assets/logo.svg'
function Review(props){
    
    const item = props.item.reviews
    console.log(item);
    
    

    return(
        <>
        <div className="comments">
        {item.map((review,index)=>(
            <div className="comment" key={index}>
            <span className="name">
               <img src={Image} alt="" />{review.reviewerName}
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