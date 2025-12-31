import { useSelector } from "react-redux"

function Review(props){

    // const products = useSelector((state) => {return state.product})

    
    const item = props.item.reviews
    console.log(item);
    

    return(
        <>

        {item.map((review,index)=>(
            <div className="comments" key={index}>
            {review.reviewerName} <br />
            ⭐{review.rating}/5.0 <br />
            {review.reviewerEmail} <br />
            {review.comment} <br />


        </div>
        ))}
        
        </>
    )

}

export default Review