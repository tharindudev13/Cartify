import { useSelector } from "react-redux"


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
            Rating {item.rating} out of 5 <br />
            Category: {item.category} <br />
            Brand: {item.brand} <br />
            Stock available: {item.stock} <br />
            Discount: {item.discountPercentage}% <br />
            {item.weight} kg <br />
            dimensions:
                <ul>
                    <li>Width: {item.dimensions.width} cm</li>
                    <li>Height: {item.dimensions.height} cm</li>
                    <li>Depth: {item.dimensions.depth} cm</li>
                </ul>
            </p>

            <h2>Warranty & Shipping</h2>
            {item.warrantyInformation} <br />
            {item.shippingInformation} <br />
            {item.returnPolicy}
            <p>

            </p>
        </div>
        
        </>
    )

}

export default ProductDetails