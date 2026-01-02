import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Image from '../assets/logo.svg'
import { Link } from "react-router"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Product(){

    const products = useSelector((state) => {return state.product})
    // const tags = products.tags
    // useEffect(() =>{
    //     console.log(tags);
        
    // })

    return(
        <>
            <div className="product">
            {products.map((product) =>(
                <div className="product-card" key={product.id}>
                    <Link to={`/details/${product.title}`}>
                    <img src={product.thumbnail} alt={product.id} />
                    <div className="tags">
                        {product.tags.map((tag) =>(
                            <span className="tag">{tag}</span>
                        ))}
                    </div>
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
                    <div className="buy">
                        <button style={{backgroundColor : "#4cd12e"}}>Buy Now <HiOutlineShoppingBag className="icon"/> </button>
                        <button style={{backgroundColor : "#f8c304"}}>Add to Cart <AiOutlineShoppingCart className="icon"/></button>
                    </div>
                    </Link>
                </div>
            ))}
            </div>
        </>
    )
}

export default Product