import { useSelector } from "react-redux"
import Review from "./Review"


const ProductDetails = (props) =>{

    const product = useSelector((state) => {return state.product})
    const id = props.id-1
    const item = product[id]
    return(
        <>
        <div className="item-details">
            <img src={item.thumbnail} alt={item.title} />
            <h2>Details</h2>
            <p>
            {item.title} <br />
            {item.description} <br />
            <span className="topic">Rating:</span>&nbsp; {item.rating} out of 5 <br />
            <span className="topic">Category:</span> &nbsp;{item.category} <br />
            <span className="topic">Brand:</span>&nbsp; {item.brand} <br />
            <span className="topic">Stock Available:</span>&nbsp; {item.stock} <br />
            <span className="topic">Discount:</span>&nbsp; {item.discountPercentage}% <br />
            {item.weight} kg <br />
            <span className="topic">Dimensions:</span>
                <ul>
                    <li><span className="topic">Width:</span>&nbsp; {item.dimensions.width} cm</li>
                    <li><span className="topic">Height:</span> &nbsp;{item.dimensions.height} cm</li>
                    <li><span className="topic">Depth:</span>&nbsp; {item.dimensions.depth} cm</li>
                </ul>
            </p>

            <h2>Warranty & Shipping</h2>
            <p>
            {item.warrantyInformation} <br />
            {item.shippingInformation} <br />
            {item.returnPolicy}
            </p>
            <h2>Ratings & Reviews</h2>

            <Review item ={item} />
        </div>
        
        </>
    )

}

export default ProductDetails