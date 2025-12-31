import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Image from '../assets/logo.svg'
import { Link } from "react-router"

function Product(){

    const products = useSelector((state) => {return state.product})
    

    return(
        <>
            <div className="product">
            {products.map((product) =>(
                <div className="product-card" key={product.id}>
                    <Link to={`/details/${product.title}`}>
                    <img src={Image} alt={product.id} />
                    <div className="details">
                        <span className="title">{product.title}</span>
                        <span className="price">${product.price}</span>
                    </div>
                    <div className="details">
                        {product.availabilityStatus === 'In Stock' && (
                            <span className="in-stock">{product.availabilityStatus}</span>

                        )}
                        {product.availabilityStatus === 'Low Stock' && (
                            <span className="low-stock">{product.availabilityStatus}</span>

                        )}
                        <span className="rate">⭐ {product.rating}/5</span>
                        <span className="category">{product.category}</span>

                    </div>
                    </Link>
                </div>
            ))}
            </div>
        </>
    )
}

export default Product