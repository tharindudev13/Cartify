import { Outlet } from "react-router"
import Products from "../pages/Products"

function ProductLayout(){

    return(
        <>
        <div>
            <Products />
            <div>
                <Outlet />
            </div>
        </div>
        </>
    )

}

export default ProductLayout