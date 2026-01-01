import { useSelector } from "react-redux"
import Review from "./Review"
import Image from '../assets/logo.svg'



const ProductDetails = (props) =>{

    const product = useSelector((state) => {return state.product})
    const id = props.id-1
    const item = product[id]
    return(
        <>
        <div className="item-details">
            <img src={item.thumbnail} alt={item.title} />
            <div className="info">
                <h2>Details</h2>
                <p>
                <span style={{fontWeight: '500',fontSize: '1.1em',marginLeft:'-5px'}}>{item.title}</span> <br />
                <span style={{fontWeight: '300',fontSize: '0.95em'}}>{item.description}</span> <br />
                <span className="topic">Rating:</span>{item.rating} out of 5 <br />
                <span className="topic">Category:</span>{item.category} <br />
                <span className="topic">Brand:</span>{item.brand} <br />
                <span className="topic">Stock Available:</span>{item.stock} <br />
                <span className="topic">Discount:</span>{item.discountPercentage}% <br />
                <span className="topic">Weight:</span>{item.weight} kg <br />
                <span className="topic">Dimensions:</span>
                    <ul>
                        <li><span className="topic">Width:</span> {item.dimensions.width} cm</li>
                        <li><span className="topic">Height:</span>{item.dimensions.height} cm</li>
                        <li><span className="topic">Depth:</span> {item.dimensions.depth} cm</li>
                    </ul>
                </p>
            </div>
            <div className="warranty">
                <h2>Warranty & Shipping</h2>
                <p>
                {item.warrantyInformation} <br />
                {item.shippingInformation} <br />
                {item.returnPolicy}
                </p>
             </div> 

            <div className="meta">
                <h2>Metadata</h2>
                <p>
                <span className="topic">Created:</span> {item.meta.createdAt} <br />
                <span className="topic">Updated:</span> {item.meta.updatedAt} <br />
                <span className="topic">Barcode:</span> {item.meta.barcode}
                </p>
                <img src={Image} alt="" />
            </div>



        </div>
        
        <div className="review">
            <h2>Ratings & Reviews</h2>
            <Review item ={item} />
        </div>
        
        </>
    )

}

export default ProductDetails